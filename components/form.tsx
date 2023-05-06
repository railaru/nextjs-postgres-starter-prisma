import React from "react";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/server";
import InputGroup from "./InputGroup";
import Pane from "./Pane";
import Button from "./Button";

async function create(formData: FormData) {
  "use server";

  await prisma.users.create({
    data: {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      image: "https://via.placeholder.com/150",
    },
  });

  revalidateTag("users");
}

export default function Form() {
  return (
    <Pane>
      <h2 className="text-xl font-semibold">Create new user</h2>
      <form action={create} className="mt-4 space-y-4">
        <InputGroup
          label="Name:"
          inputProps={{
            name: "name",
            id: "name",
            placeholder: "Enter your name",
          }}
        />
        <InputGroup
          label="Email:"
          inputProps={{
            name: "email",
            id: "email",
            placeholder: "Enter your email address",
          }}
        />
        <Button>Submit</Button>
      </form>
    </Pane>
  );
}
