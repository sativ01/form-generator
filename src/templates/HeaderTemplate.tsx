import { BaseTemplate } from "./BaseTemplate";
import { TEMPLATES } from "../tabs/Transformer";
import { Typography } from "@material-ui/core";

const RenderComponentJSX = (props: any) => (
  <Typography variant="h4" component="h2" {...props}>
    {props.label}
  </Typography>
);

// sample json text: {"title":{"label": "heeey", "variant":"filled"}}

export const HeaderTemplate = new BaseTemplate(
  "Input Template",
  TEMPLATES.title,
  new Set(["label"]),
  RenderComponentJSX
);
