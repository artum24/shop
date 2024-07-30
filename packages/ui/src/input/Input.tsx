import { HTMLInputTypeAttribute } from "react";
import classNames from "classnames";

type InputProps = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  classes?: string;
};
export const Input = ({ placeholder, classes, type = "text" }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder || ""}
      className={classNames(
        "w-full border-gray-300 border-[0.5px] focus:outline-black rounded-lg text-sm px-4 focus:outline-offset-2",
        {
          [classes]: !!classes,
        },
      )}
    />
  );
};
