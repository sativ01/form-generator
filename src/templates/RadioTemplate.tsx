import { BaseTemplate } from "./BaseTemplate";
import { TEMPLATES } from "../tabs/Transformer";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

type IRadioProps = {
  label: string;
  values: string[];
  selectedValue: string;
};

const RenderComponentJSX = ({
  values = ["yes", "no"],
  selectedValue,
  label = "Chose:"
}: IRadioProps) => {
  const labels = values.map((value) => (
    <FormControlLabel value={value} control={<Radio />} label={value} />
  ));

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup
        aria-label="options"
        name="options"
        value={selectedValue ?? values[0]}
      >
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
