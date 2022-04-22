import { BaseTemplate } from "./BaseTemplate";
import { InputProps, TEMPLATES } from "../tabs/Transformer";

import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";

interface ButtonsProps extends InputProps {
  values: string[];
}

export const RenderComponentJSX = ({ values }: ButtonsProps) => {
  const content = values?.map((label) => (
    <Button variant="contained" key={`button-${label}`}>
      {label}
    </Button>
  ));
  return (
    <Stack direction="row" spacing={2}>
      {content}
    </Stack>
  );
};

// sample json text: {"buttons":{"values": ["one", "two", "three"]}

export const ButtonsTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.buttons,
  new Set(["values"]),
  RenderComponentJSX
);
