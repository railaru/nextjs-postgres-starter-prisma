import React, { HtmlHTMLAttributes, ReactNode } from "react";

type Button = HtmlHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function Button({ children, ...props }: Button) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600"
    >
      {children}
    </button>
  );
}
