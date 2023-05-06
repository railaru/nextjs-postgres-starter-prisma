"use server";

import prisma from "@/lib/prisma";
import { revalidateTag } from "next/cache";

export async function remove(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.users.delete({
    where: {
      id,
    },
  });

  revalidateTag("users");
}

export async function update(formData: FormData) {
  const id = Number(formData.get("id"));

  await prisma.users.update({
    where: {
      id,
    },
    data: {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    },
  });

  revalidateTag("users");
}

export async function create(formData: FormData) {
  await prisma.users.create({
    data: {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      image: "https://robohash.org/example.png",
    },
  });

  revalidateTag("users");
}
