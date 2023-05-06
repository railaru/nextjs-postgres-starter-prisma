"use server";

import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function remove(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.users.delete({
    where: {
      id,
    },
  });

  revalidateTag("users");
  redirect("/");
}

export async function update(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.users.update({
    where: {
      id,
    },
    data: {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
    },
  });

  revalidateTag("users");
}
