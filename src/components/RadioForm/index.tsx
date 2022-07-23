import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { ChangeEventHandler } from "react";
export interface RadioFormProps {
  value: string;
  name: string;
  title: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
export default function RadioForm({ title, ...props }: RadioFormProps) {
  return (
    <FormControl>
      <FormLabel>{title}</FormLabel>
      <RadioGroup row {...props}>
        <FormControlLabel value="female" control={<Radio />} label="زن" />
        <FormControlLabel value="male" control={<Radio />} label="مرد" />
      </RadioGroup>
    </FormControl>
  );
}
