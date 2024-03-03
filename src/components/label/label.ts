import { Block } from '../../lib/Block';
import { ILabelProps } from './types';

import label from './label.hbs?raw';

export class Label extends Block {
  constructor(props: ILabelProps) {
    super(props);
  }

  render() {
    return label;
  }
}
