import { Block } from '../../lib/Block';
import { IInputFieldProps } from './types';

import inputField from './inputField.hbs?raw';

export class InputField extends Block {
  constructor(props: IInputFieldProps) {
    props.onBlur = () => this.validate();

    props.error = {
      isError: false,
      text: '',
    };

    if (props.showError == null) {
      props.showError = true;
    }

    super(props);
  }

  validationResult() {
    if (this.validate()) {
      return null;
    }

    return this.props.error.text;
  }

  value() {
    if (!this.validate()) {
      return null;
    }

    return (this.getRefs().input.element as HTMLInputElement).value.trim();
  }

  get props() {
    return this._props as IInputFieldProps;
  }

  validate() {
    const inputValue = (this.getRefs().input.element as HTMLInputElement).value.trim();
    const validationResult = this.props.validate(inputValue);
    const isError = validationResult !== '';
    const error = {
      isError,
      text: validationResult,
    };

    const propsToSet = { ...this.props };
    propsToSet.value = inputValue;
    propsToSet.error = error;

    this.setProps(propsToSet);

    return !isError;
  }

  clearInput() {
    const propsToSet = { ...this.props };
    propsToSet.value = '';
    propsToSet.error = {
      isError: false,
      text: '',
    };

    this.setProps(propsToSet);
  }

  render() {
    return inputField;
  }
}
