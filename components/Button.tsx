import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
} from "react";
import classnames from "classnames";

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
      className={classnames(
        "px-4 py-2 text-white bg-green-700 rounded hover:bg-green-800",
        props.className
      )}
    >
      {children}
    </button>
  );
}
