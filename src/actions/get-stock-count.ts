import prismadb from "@/lib/db";

export async function getStockCount(storeId: string) {
  const stockCount = await prismadb.product.count({
    where: {
      storeId,
      isArchived: false,
    },
  });

  return stockCount;
}
