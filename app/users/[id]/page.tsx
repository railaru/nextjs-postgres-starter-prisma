import Link from "next/link";
import Image from "next/image";
import { revalidateTag } from "next/server";
import { redirect } from "next/navigation";
import React from "react";
import prisma from "@/lib/prisma";

type Props = {
  params: {
    id: string;
  };
};

async function remove(formData: FormData) {
  "use server";

  await prisma.users.delete({
    where: {
      id: Number(formData.get("id")),
    },
  });

  revalidateTag("users");
  redirect("/");
}

async function update(formData: FormData) {
  "use server";

  await prisma.users.update({
    where: {
      id: Number(formData.get("id")),
    },
    data: {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
    },
  });

  revalidateTag("users");
}

export default async function Page(props: Props) {
  const user = await prisma.users.findUnique({
    where: {
      id: Number(props.params.id),
    },
  });

  return (
    <div>
      <h1 className="text-xl">Single User Page</h1>

      <div>
        <Link href="/" className="text-blue-600">
          Home
        </Link>
      </div>

      <div className="space-y-4">
        {user?.image && (
          <Image src={user?.image} alt={user?.name} width={45} height={45} />
        )}

        <h3 className="text-lg">{user?.name}</h3>

        <h3>{user?.email}</h3>

        <form action={update} className="mt-4">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-gray-700"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              defaultValue={user?.name ?? ""}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-vercel-purple-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              defaultValue={user?.email ?? ""}
              className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-vercel-purple-500"
            />
          </div>
          <input type="hidden" name="id" value={user?.id} />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600"
          >
            Submit
          </button>
        </form>

        <form action={remove}>
          <input type="hidden" name="id" value={user?.id} />

          <button
            type="submit"
            className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
          >
            Remove
          </button>
        </form>
      </div>
    </div>
  );
}
