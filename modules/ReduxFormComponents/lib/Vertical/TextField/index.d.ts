interface TextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
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

export default class TextField extends React.Component<TextFieldProps> {}
