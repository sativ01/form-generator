# Generates Form from JSON text
## Genearl description
Application is split in two Tabs. On one Tab user can type in the JSON text that would represent a desired form fields.
After clicking on the other tab user will see generated Form.

Form can have a title on top and button row in the bottom, both generated from JSON.

Format of JSON is following:
```JSON
{
 "title": { "label": "Top Label" }, // represents top level header
 "items": [], // represents array of items that will be generated
 "buttons": { "values" : [] } // Array of botom placed buttons
}
```

## Items
Items
Items are from the list of supported form items:
* textfield
* datefield
* numberfield
* radio
* textarea
* checkbox

Each item can have properties that are listed as value for the item. E.g. "label", "variant", etc.
Each item has a list of supported properties, if the property is not supported it will be ignored.
These properties will be passed to the rendering function as `props` and used accordingly.

General architecture is made to be modular. Every supported item only implements the list of supported props and it's own renderer.
Addition of a new item is straight forward hence scaling is made to be easy

### Codesandbox [link](https://codesandbox.io/s/awesome-breeze-vl9fou?file=/README.md)

Please use this link for testing. The project is not tested locally

## Sample JSON for testing:

```JSON
{
  "title": { "label": "header" },
  "items": [
    { "textfield": { "label": "filled", "variant": "filled" } },
    { "textfield": { "label": "outlined", "variant": "outlined" } },
    { "dateflied": { "label": "custom date" } },
    { "numberfield": { "label": "Numberrrr", "value": "12" } },
    {
      "radio": {
        "label": "Choose",
        "values": ["one", "two", "three"],
        "selectedValue": "three"
      }
    },
    { "textarea": { "label": "heeey", "value": "multiline text" } },
    { "checkbox": { "label": "Check it", "checked": true } }
  ],
  "buttons": { "values": ["OK", "Cancel"] }
}
```

Unfortunately corner cases and errors are not managed.
Input is not validated
Tests are absent
