import {
  InputProps,
  RegisterCallback,
  SupportedInputs
} from "../tabs/Transformer";

export const RenderComponentJSX = (props: any) => <></>;

export class BaseTemplate {
  private validProps: InputProps = {};

  constructor(
    private templateName: string,
    private templateType: SupportedInputs,
    private supportedProps: Set<string>,
    private RenderComponent = RenderComponentJSX
  ) {}

  validateProps(props: InputProps) {
    Object.keys(props).forEach((prop) => {
      if (this.supportedProps.has(prop)) {
        this.validProps[prop] = props[prop];
      }
    });
    return true;
  }

  public register(registerCallback: RegisterCallback) {
    registerCallback(this.templateType, this);
  }

  public render(props: InputProps) {
    if (!this.validateProps(props)) {
      throw Error(`${this.templateName}: invalid props`);
    }
    return <this.RenderComponent {...this.validProps} />;
  }
}
