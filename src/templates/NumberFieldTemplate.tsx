import { BaseTemplate } from "./BaseTemplate";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";
import { TEMPLATES } from "../tabs/Transformer";

const RenderComponentJSX = (props: TextFieldProps) => (
  <TextField id="number" label="Number" type="number" {...props} />
);

// sample json text: {"numberfield":{"label": "heeey", "value":"12"}}

export const NumberFieldTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.numberfield,
  new Set(["value"]),
  RenderComponentJSX
);
