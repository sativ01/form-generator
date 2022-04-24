import { BaseTemplate } from "./BaseTemplate";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import { TEMPLATES } from "../tabs/Transformer";

const RenderComponentJSX = (props: TextFieldProps) => (
  <TextField label="Default Label" {...props} />
);

// sample json text: {"textfield":{"label": "heeey", "variant":"filled"}}

export const InputTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.textfield,
  new Set(["test", "text", "variant", "label"]),
  RenderComponentJSX
);
