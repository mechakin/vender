import prismadb from "@/lib/db";

export async function getSalesCount(storeId: string) {
  const salesCount = await prismadb.order.count({
    where: {
      storeId,
      isPaid: true,
    },
  });

  return salesCount;
}
