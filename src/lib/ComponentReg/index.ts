import Handlebars, { HelperOptions } from 'handlebars';
import { Block } from '..';

export function registerComponent(name: string, Component: typeof Block) {
  if (name in Handlebars.helpers) {
    throw `Компонент ${name} уже зарегистрирован`;
  }

  Handlebars.registerHelper(name, function (this: unknown, { hash, data, fn }: HelperOptions) {
    const component = new Component(hash);
    const dataAttribute = `data-id="${component.id}"`;

    if ('ref' in hash) {
      (data.root.refs = data.root.refs || {})[hash.ref] = component;
    }

    (data.root.children = data.root.children || []).push({
      component,
      embed(documentfragment: DocumentFragment) {
        const dataElement = documentfragment.querySelector(`[${dataAttribute}]`);
        
        if (dataElement) {
          component.getContent()?.append(...Array.from(dataElement.childNodes));
          dataElement.replaceWith(component.getContent()!);
        }
      },
    });

    const content = fn ? fn(this) : '';

    return `<div ${dataAttribute}>${content}</div>`;
  });
}
