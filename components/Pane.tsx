import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Pane({ children }: Props) {
  return (
    <div className="w-full p-8 mx-auto bg-white rounded-lg shadow-lg ring-1 ring-gray-900/5 backdrop-blur-lg">
      {children}
    </div>
  );
}
