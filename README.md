# Generates Form from JSON text

### Codesandbox [link](https://codesandbox.io/s/awesome-breeze-vl9fou?file=/README.md)

Please use this link for testing. The project is not tested locally

## Sample JSON for testing:

```JSON
{
  "title": { "label": "header" },
  "items": [
    { "textfield": { "label": "heeey 01", "variant": "filled" } },
    { "textfield": { "label": "heeey 02", "variant": "filled" } },
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
