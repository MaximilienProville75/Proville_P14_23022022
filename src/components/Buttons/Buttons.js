import React from "react";
import { classNames } from "../../Utils/Utils";

export function Button({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-4 py-2 border ring-4 text-sm ring-purple-300/40 font-medium rounded-md text-gray-700 bg-purple-100 hover:bg-purple-300/40",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-purple-100 hover:bg-purple-300/40",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
