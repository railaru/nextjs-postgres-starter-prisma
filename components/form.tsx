import React from "react";
import prisma from "@/lib/prisma";
import { revalidateTag } from "next/server";

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
    <div className="w-full p-12 mx-auto rounded-lg shadow-xl bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg">
      <h2 className="text-xl font-semibold">Create new user</h2>
      <form action={create} className="mt-4">
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
            className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-vercel-purple-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
