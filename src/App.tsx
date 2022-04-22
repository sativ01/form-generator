import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "./tabs/TabPanel";
import Transformer, { ParsedJson } from "./tabs/Transformer";

import { InputTemplate } from "./templates/InputTemplate";
import { createStyles, TextField, Typography } from "@material-ui/core";
import { NumberFieldTemplate } from "./templates/NumberFieldTemplate";
import { TextAreaTemplate } from "./templates/TextAreaTemplate";
import { RadioTemplate } from "./templates/RadioTemplate";
import { DateFieldTemplate } from "./templates/DateFieldTemplate";
import { HeaderTemplate } from "./templates/HeaderTemplate";
import { ButtonsTemplate } from "./templates/ButtonsTemplate";
import Stack from "@mui/material/Stack";
import { CheckboxTemplate } from "./templates/CheckBoxTemplate";
function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      maxWidth: 800,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }),
);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [header, setHeader] = React.useState<JSX.Element>();
  const [footer, setFooter] = React.useState<JSX.Element>();

  const [jsonText, setJsonText] = React.useState("");
  const transformer = React.useMemo(() => {
    return new Transformer([
      InputTemplate,
      NumberFieldTemplate,
      TextAreaTemplate,
      RadioTemplate,
      DateFieldTemplate,
      HeaderTemplate,
      ButtonsTemplate,
      CheckboxTemplate
    ]);
  }, []);

  const [form, setForm] = React.useState<JSX.Element | JSX.Element[] | null>(
    <Typography> nothing to show </Typography>
  );

  const handleTabSwitch = React.useCallback(
    (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);

      let parsedJson = {} as ParsedJson;
      try {
        parsedJson = JSON.parse(jsonText);
      } catch (e) {
        //do nothing user is preparing the input
      }

      if (parsedJson && transformer) {
        const { items, title, buttons } = parsedJson;
        if (items) {
          const content = transformer.transformMultipleInputs(items);
          setForm(content);
        }
        if (title) {
          const content = transformer.transformInput("title", title);
          setHeader(content);
        }
        if (buttons) {
          const content = transformer.transformInput("buttons", buttons);
          setFooter(content);
        }
      }
    },
    [jsonText, transformer]
  );

  const handleInputChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const rawInputText = event.target.value;
      setJsonText(rawInputText);
    },
    []
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleTabSwitch}
          aria-label="simple tabs example"
        >
          <Tab label="JSON" {...a11yProps(0)} />
          <Tab label="Form" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextField
          id="standard-multiline-static"
          label="Json to Parse"
          multiline
          placeholder="{ Type in your JSON... }"
          variant="standard"
          fullWidth
          onChange={handleInputChange}
          value={jsonText}
          minRows={20}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Stack spacing={2}>
          {header}
          <form className={classes.root} noValidate autoComplete="off">
            <Stack spacing={2}>{form}</Stack>
          </form>
          {footer}
        </Stack>
      </TabPanel>
    </div>
  );
}
