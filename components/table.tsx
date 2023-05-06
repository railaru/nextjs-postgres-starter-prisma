import prisma from "@/lib/prisma";
import { timeAgo } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Pane from "./Pane";
import { revalidateTag } from "next/cache";
import { users } from "@prisma/client";

export default async function Table() {
  const res = await fetch("http://localhost:3001/users/api", {
    cache: "no-cache",
    next: { tags: ["users"] },
  });
  const data = (await res.json()) as { users: users[] };

  return (
    <Pane>
      <h2 className="text-xl font-semibold">Recent Users</h2>
      <div className="mt-4 divide-y divide-gray-900/5">
        {data.users.map((user) => (
          <Link
            key={user.name}
            href={`/users/${user.id}`}
            className="flex items-center justify-between py-3"
          >
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
            <p className="text-sm text-gray-500">{timeAgo(user.createdAt)}</p>
          </Link>
        ))}
      </div>
    </Pane>
  );
}
