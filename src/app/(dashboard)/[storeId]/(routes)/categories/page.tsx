import prismadb from "@/lib/db";
import CategoryClient from "./components/client";
import { CategoryColumn } from "./components/columns";
import { format } from "date-fns";

export default async function CategoryPage({
  params,
}: {
  params: { categoryId: string };
}) {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.categoryId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: { billboard: true },
  });

  const formattedCategories: CategoryColumn[] = categories.map((item) => ({
    id: item.id,
    name: item.name,
    billboardLabel: item.billboard.label,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
}
