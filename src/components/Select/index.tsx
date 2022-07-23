import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
export interface SelectProps {
  MenuItems?: string[];
  onChange?: any;
}
export default function SelectForm({ MenuItems, onChange }: SelectProps) {
  return (
    <FormControl fullWidth>
      <InputLabel>Product</InputLabel>
      <Select onChange={onChange}>
        {MenuItems?.map((item, index) => (
          <MenuItem value={index} key={index}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
