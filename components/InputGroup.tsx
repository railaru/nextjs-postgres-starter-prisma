import React, {
  HTMLAttributes,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  inputProps: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
  label: string;
};

export default function Input({ inputProps, label, ...props }: Props) {
  return (
    <div {...props}>
      <label
        htmlFor={inputProps.name}
        className="block mb-2 font-semibold text-gray-700"
      >
        {label}
      </label>
      <input
        {...inputProps}
        className="w-full px-4 py-2 border border-gray-400 rounded-lg focus:outline-none focus:border-vercel-purple-500"
      />
    </div>
  );
}
