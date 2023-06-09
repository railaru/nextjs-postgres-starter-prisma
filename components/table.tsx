import prisma from "@/lib/prisma";
import Pane from "./Pane";
import UserBlock from "./UserBlock";

export default async function Table() {
  const users = await prisma.users.findMany();

  return (
    <Pane>
      <h2 className="text-xl font-semibold">Users</h2>
      <div className="w-full mt-4 overflow-scroll text-sm text-left text-gray-500 max-w-[1424px]">
        <div className="space-y-8 divide-y divide-gray-900/5">
          {users.map((user, index) => (
            <UserBlock user={user} key={index} />
          ))}
        </div>
      </div>
    </Pane>
  );
}
