import { BaseTemplate } from "./BaseTemplate";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { TEMPLATES } from "../tabs/Transformer";

const RenderComponentJSX = (props: TextFieldProps) => (
  <TextField
    id="date"
    label="Birthday"
    type="date"
    defaultValue="2017-05-24"
    InputLabelProps={{
      shrink: true
    }}
    {...props}
  />
);

// sample json text: {"dateflied":{"label": "heeey"}}

export const DateFieldTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.dateflied,
  new Set(["value", "label"]),
  RenderComponentJSX
);
