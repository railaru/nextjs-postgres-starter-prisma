import prisma from "@/lib/prisma";
import { timeAgo } from "@/lib/utils";
import Image from "next/image";
import RefreshButton from "./refresh-button";
import Link from "next/link";

export default async function Table() {
  const startTime = Date.now();
  const users = await prisma.users.findMany();
  const duration = Date.now() - startTime;

  return (
    <div className="w-full p-12 mx-auto rounded-lg shadow-xl bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Recent Users</h2>
          <p className="text-sm text-gray-500">
            Fetched {users.length} users in {duration}ms
          </p>
        </div>
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {users.map((user) => (
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
    </div>
  );
}
