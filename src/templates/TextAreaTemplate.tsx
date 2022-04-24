import { BaseTemplate } from "./BaseTemplate";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { TEMPLATES } from "../tabs/Transformer";
import { useState, useCallback } from "react";

const RenderComponentJSX = (props: TextFieldProps) => {
  const [fieldValue, setFieldValue] = useState(props.value);
  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawInputText = event.target.value;
      setFieldValue(rawInputText);
    },
    []
  );
  return (
    <TextField
      id="standard-multiline-static"
      label="Multiline"
      multiline
      rows={4}
      defaultValue="Default Value"
      variant="standard"
      {...props}
      onChange={handleInputChange}
      value={fieldValue}
    />
  );
};

// sample json text: {"textarea":{"label": "heeey", "value":"multiline text"}}

export const TextAreaTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.textarea,
  new Set(["value", "label"]),
  RenderComponentJSX
);
