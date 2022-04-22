import { BaseTemplate } from "./BaseTemplate";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { TEMPLATES } from "../tabs/Transformer";

const RenderComponentJSX = (props: TextFieldProps) => (
  <TextField
    id="standard-multiline-static"
    label="Multiline"
    multiline
    rows={4}
    defaultValue="Default Value"
    variant="standard"
    {...props}
  />
);

// sample json text: {"textarea":{"label": "heeey", "value":"multiline text"}}

export const TextAreaTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.textarea,
  new Set(["value", "label"]),
  RenderComponentJSX
);
