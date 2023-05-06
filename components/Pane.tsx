import classnames from "classnames";
import React, { HtmlHTMLAttributes, ReactNode } from "react";

type Props = HtmlHTMLAttributes<HTMLDivElement>;

export default function Pane({ children, ...props }: Props) {
  return (
    <div
      {...props}
      className={classnames(
        "w-full p-6 mx-auto bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 backdrop-blur-lg",
        props.className
      )}
    >
      {children}
    </div>
  );
}
