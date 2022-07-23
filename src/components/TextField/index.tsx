import { TextField } from "@mui/material";
import React, { ChangeEventHandler } from "react";
export interface TextFieldProps {
  name: string;
  label: string;
  type: string;
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export default function TextFieldForm({ type, ...props }: TextFieldProps) {
  return <TextField type={type === "pass" ? "password" : type} {...props} />;
}
