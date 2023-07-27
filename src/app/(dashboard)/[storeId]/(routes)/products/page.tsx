import prismadb from "@/lib/db";
import ProductClient from "./components/client";
import { ProductColumn } from "./components/columns";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";

export default async function BillboardsPage({
  params,
}: {
  params: { storeId: string };
}) {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const TRUNCATE_INDEX = 20;

  const formattedProducts: ProductColumn[] = products.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description.substring(0, TRUNCATE_INDEX) + "...",
    isFeatured:
      item.isFeatured.toString().charAt(0).toUpperCase() +
      item.isFeatured.toString().slice(1),
    isArchived:
      item.isArchived.toString().charAt(0).toUpperCase() +
      item.isArchived.toString().slice(1),
    price: formatter.format(item.price.toNumber()),
    category: item.category.name,
    size: item.size.name,
    color: item.color.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
}
