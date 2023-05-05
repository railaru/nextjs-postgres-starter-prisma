import Form from "@/components/Form";
import Table from "@/components/Table";

// Prisma does not support Edge without the Data Proxy currently
// export const runtime = 'edge'
export const preferredRegion = "home";
export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-8">
      <Form />

      {/* @ts-expect-error Async Server Component */}
      <Table />
    </main>
  );
}
