import React from "react";
import { BaseTemplate } from "./BaseTemplate";
import { TEMPLATES } from "../tabs/Transformer";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

type IRadioProps = {
  label: string;
  values: string[];
  selectedValue: string;
};

const RenderComponentJSX = ({
  values = ["yes", "no"],
  selectedValue,
  label = "Chose:",
}: IRadioProps) => {

  const labels = values.map((value) => (
    <FormControlLabel
      value={value}
      control={<Radio />}
      label={value}
    />
  ));

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup aria-label="options" name="options" defaultValue={selectedValue ?? values[0]}>
        {labels}
      </RadioGroup>
    </FormControl>
  );
};

// sample json text: {"radio":{"label": "choose", "values": ["one", "two", "three"], "selectedValue": "three"}}

export const RadioTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.radio,
  new Set(["label", "values", "selectedValue"]),
  RenderComponentJSX
);
