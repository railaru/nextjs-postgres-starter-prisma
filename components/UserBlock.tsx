import React from "react";
import Image from "next/image";
import Button from "./Button";
import Input from "./InputGroup";
import { users } from "@prisma/client";
import { remove, update } from "@/app/users/[id]/_actions";
import InputGroup from "./InputGroup";
import Link from "next/link";

type Props = {
  user: users;
};

export default function UserBlock({ user }: Props) {
  return (
    <div>
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
            <Link
              href={`/users/${user.id}`}
              className="block font-medium leading-none text-blue-600 hover:underline"
            >
              {user.name}
            </Link>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        {/* @ts-expect-error Server Action */}
        <form action={remove}>
          <input type="hidden" name="id" value={user?.id} />

          <Button type="submit" className="bg-red-500 hover:bg-red-600">
            Remove
          </Button>
        </form>
      </div>
      <div className="mt-4 space-y-4">
        {/* @ts-expect-error Server Action */}
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
    </div>
  );
}
