import React from "react";
import InputGroup from "./InputGroup";
import Pane from "./Pane";
import Button from "./Button";
import { create } from "@/app/users/[id]/_actions";

export default function Form() {
  return (
    <div>
      <Pane>
        <h2 className="text-xl font-semibold">Create a new user</h2>
        {/* @ts-expect-error Server Action */}
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
          <Button type="submit">Submit</Button>
        </form>
      </Pane>
    </div>
  );
}
