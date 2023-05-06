import Link from "next/link";
import React from "react";
import prisma from "@/lib/prisma";
import Pane from "@/components/Pane";
import UserBlock from "@/components/UserBlock";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page(props: Props) {
  const user = await prisma.users.findUnique({
    where: {
      id: Number(props.params.id),
    },
  });

  if (!user) {
    return null;
  }

  return (
    <div>
      <Pane className="max-w-[700px] divide-y divide-gray-900/5">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-xl font-semibold">Edit User Page</h2>
          <Link href="/" className="inline-block text-blue-600">
            ← Home
          </Link>
        </div>
        <UserBlock user={user} />
      </Pane>
    </div>
  );
}
