import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";

type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: ReactNode;
};

export default function Button({ children, ...props }: Button) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-white bg-green-700 rounded hover:bg-green-800"
    >
      {children}
    </button>
  );
}
