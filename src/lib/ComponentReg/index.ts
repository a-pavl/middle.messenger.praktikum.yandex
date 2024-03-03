import Handlebars, { HelperOptions } from 'handlebars';
import { Block } from '..';

export function registerComponent(name: string, Component: typeof Block) {
  if (name in Handlebars.helpers) {
    throw `The ${name} component is already registered!`;
  }

  Handlebars.registerHelper(name, function (this: unknown, { hash, data, fn }: HelperOptions) {
    const component = new Component(hash);

    const dataAttribute = `data-id="${component.id}"`;

    if ('ref' in hash) {
      (data.root.refs = data.root.refs || {})[hash.ref] = component;
    }

    (data.root.children = data.root.children || []).push({
      component,
      embed(fragment: DocumentFragment) {
        const stub = fragment.querySelector(`[${dataAttribute}]`);

        if (!stub) {
          return;
        }

        component.getContent()?.append(...Array.from(stub.childNodes));

        stub.replaceWith(component.getContent()!);
      },
    });

    const contents = fn ? fn(this) : '';

    return `<div ${dataAttribute}>${contents}</div>`;
  });
}
