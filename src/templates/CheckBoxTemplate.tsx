import { BaseTemplate } from "./BaseTemplate";
import { TEMPLATES } from "../tabs/Transformer";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@material-ui/core";

const RenderComponentJSX = (props: any) => (
  <FormGroup>
    <FormControlLabel control={<Checkbox {...props} />} {...props} />
  </FormGroup>
);

// sample json text: {"checkbox":{"label": "Checkbox", "checked": true}}
export const CheckboxTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.checkbox,
  new Set(["label", "checked", "disabled"]),
  RenderComponentJSX
);
