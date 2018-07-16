import React from "react";

interface TextFieldWithSubmitProps
  extends React.HTMLAttributes<HTMLInputElement> {
  submitText?: string;
  helperText?: string;
  autoFocus?: boolean;
  className?: string;
  label?: string;
  placeholder?: string;
  type?:
    | "email"
    | "hidden"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "url";
}

export default class TextFieldWithSubmit extends React.Component<
  TextFieldWithSubmitProps
> {}
