import React from "react";
import { BaseTemplate } from "./BaseTemplate";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { TEMPLATES } from "../tabs/Transformer";

const RenderComponentJSX = (props: TextFieldProps) => {
  const [fieldValue, setFieldValue] = React.useState(props.value);
  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawInputText = event.target.value;
      setFieldValue(rawInputText);
    },
    []
  );
  return (
    <TextField
      id="number"
      label="Number"
      type="number"
      {...props}
      onChange={handleInputChange}
      value={fieldValue}
    />
  );
};

// sample json text: {"numberfield":{"label": "heeey", "value":"12"}}

export const NumberFieldTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.numberfield,
  new Set(["value"]),
  RenderComponentJSX
);
