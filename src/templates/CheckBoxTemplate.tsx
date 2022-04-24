import React from "react";
import { BaseTemplate } from "./BaseTemplate";
import { TEMPLATES } from "../tabs/Transformer";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { FormControlLabel, FormGroup } from "@material-ui/core";

interface CBProps extends CheckboxProps {
  label: string;
}

const RenderComponentJSX = (props: CBProps) => {
  const [checked, setChecked] = React.useState(props.checked);
  const handleClick = () => setChecked(!checked);
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox {...props} checked={checked} onClick={handleClick} />
        }
        label={props.label}
      />
    </FormGroup>
  );
};

// sample json text: {"checkbox":{"label": "Checkbox", "checked": true}}
export const CheckboxTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.checkbox,
  new Set(["label", "checked", "disabled"]),
  RenderComponentJSX
);
