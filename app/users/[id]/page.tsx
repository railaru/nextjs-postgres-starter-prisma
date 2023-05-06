import Link from "next/link";
import Image from "next/image";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import React from "react";
import prisma from "@/lib/prisma";
import Pane from "@/components/Pane";
import InputGroup from "@/components/InputGroup";
import Button from "@/components/Button";
import { remove, update } from "./_actions";

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
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold">Edit User Page</h2>
          <Link href="/" className="inline-block text-blue-600">
            ← Home
          </Link>
        </div>
        <div className="flex items-center justify-between py-4 mt-4">
          <div className="flex items-center space-x-4">
            <Image
              src={user.image}
              alt={user.name}
              width={48}
              height={48}
              className="rounded-full ring-1 ring-gray-900/5"
            />
            <div className="space-y-1">
              <p className="font-medium leading-none">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
          </div>
          <form action={remove}>
            <input type="hidden" name="id" value={user?.id} />

            <Button type="submit" className="bg-red-500 hover:bg-red-600">
              Remove
            </Button>
          </form>
        </div>
        <div className="mt-4 space-y-4">
          <form action={update} className="mt-4 space-y-4">
            <InputGroup
              label="Name:"
              inputProps={{
                name: "name",
                id: "name",
                placeholder: "Enter your name",
                defaultValue: user.name,
              }}
            />
            <InputGroup
              label="Email:"
              inputProps={{
                name: "email",
                id: "email",
                placeholder: "Enter your email address",
                defaultValue: user.email,
              }}
            />
            <input type="hidden" name="id" value={user?.id} />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </Pane>
    </div>
  );
}
