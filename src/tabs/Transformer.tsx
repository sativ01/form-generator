import { BaseTemplate } from "../templates/BaseTemplate";

export type ElementWithProps = {
  [key in SupportedInputs]: InputProps;
};
export type ParsedJson = {
  items: ElementWithProps[];
  title: InputProps;
  buttons: InputProps;
};
export type InputProps = Record<string, InputProp>;
export type InputProp = number | string | string[] | {};

export enum TEMPLATES {
  numberfield = "numberfield",
  textfield = "textfield",
  textarea = "textarea",
  dateflied = "dateflied",
  radio = "radio",
  title = "title",
  buttons = "buttons",
  checkbox = "checkbox"
}

type Templates = keyof typeof TEMPLATES;

// items is not parse keywords
export type SupportedInputs = Templates;

export type RegisterCallback = (
  input: SupportedInputs,
  templateClass: any
) => void;

export default class Transformer<T extends BaseTemplate> {
  private register = new Map<SupportedInputs, T>();
  private error = false;
  private registerCallback: RegisterCallback = (
    templateType,
    transormerClass
  ) => this.register.set(templateType, transormerClass);

  constructor(templates: T[]) {
    templates.forEach((Template) => Template.register(this.registerCallback));
  }

  public transformInput(inputType: SupportedInputs, props: InputProps) {
    try {
      const transformer = this.register.get(inputType);
      if (transformer) {
        return transformer.render(props);
      }
    } catch (e) {
      this.error = true;
    }
  }

  public transformMultipleInputs(inputsData: ElementWithProps[]) {
    const result: JSX.Element[] = [];
    try {
      inputsData.forEach((inputData) => {
        const [inputType, props] = Object.entries(inputData)[0]; // they always contain a single record
        const transformed = this.transformInput(
          inputType as SupportedInputs,
          props as InputProps
        );
        if (transformed) {
          result.push(transformed);
        }
      });
    } catch (e) {
      return null;
    }

    return result;
  }
}
