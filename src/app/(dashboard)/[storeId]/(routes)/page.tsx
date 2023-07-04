import prismadb from "@/lib/db";

type DashboardPageProps = {
  params: { storeId: string };
};

export default async function DashboardPage({ params }: DashboardPageProps) {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>active store: {store?.name}</div>;
}
