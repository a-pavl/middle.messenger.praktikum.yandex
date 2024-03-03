import Handlebars from 'handlebars';
import { v4 as uuidv4 } from 'uuid';
import { EventBus } from '..';
import { IProps } from '../../types';
import { IProxyProps } from './types';

export class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
    FLOW_CWUM: 'flow:component-will-unmount',
  };

  eventBus: () => EventBus;

  id: string;

  _element: HTMLElement | null = null;

  _props: IProps;

  _refs: Record<string, Block>;

  children: Record<string, Block>;

  constructor(propsWithChildren: IProps = {}) {
    const eventBus = new EventBus();

    this.id = uuidv4();
    this._refs = {};

    const { props, children } = this._getChildrenAndProps(propsWithChildren);

    this.eventBus = () => eventBus;

    this.children = children;
    this._props = this._makePropsProxy(props, this);

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildrenAndProps(childrenAndProps: IProps) {
    const props: Record<string, unknown> = {};
    const children: Record<string, Block> = {};

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { props, children };
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CWUM, this._componentWillUnmount.bind(this));
  }

  _init() {
    this.init();

    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  init() {}

  _componentDidMount() {
    this.componentDidMount();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // Может переопределять пользователь
  componentDidMount() {}

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);

    Object.values(this.children).forEach((child) => child.dispatchComponentDidMount());
  }

  _componentWillUnmount() {
    this.componentWillUnmount();
    this._unsubscribeFromEvents();
  }

  componentWillUnmount() {}

  _componentDidUpdate(oldProps: IProps, newProps: IProps) {
    const isUpdated = this.componentDidUpdate(oldProps, newProps);

    if (isUpdated) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    return isUpdated;
  }

  // Может переопределять пользователь
  componentDidUpdate(oldProps: IProps, newProps: IProps) {
    return (oldProps !== newProps);
  }

  setProps = (nextProps: IProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this._props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const documentFragment = this.compile(this.render(), this._props);

    const element = documentFragment.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(element);
    }

    this._element = element;

    this._subscribeToEvents();
  }

  // Может переопределять пользователь
  render() {
    return '';
  }

  public getRefs() {
    return this._refs;
  }

  compile(template: string, context: object) {
    const contextAndTemplates = {
      ...context,
      children: [] as Array<{ component: unknown, embed(node: DocumentFragment): void }>,
      refs: this.getRefs(),
    };

    const html = Handlebars.compile(template)(contextAndTemplates);

    const tempElement = document.createElement('template');

    tempElement.innerHTML = html;
    contextAndTemplates.children?.forEach(({ embed }) => {
      embed(tempElement.content);
    });

    Object.values(this.children).forEach((child) => {
      tempElement.content.querySelector(`[data-id="${child.id}"]`)?.replaceWith(child.getContent()!);
    });

    return tempElement.content;
  }

  getId() {
    return this.id;
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: IProxyProps, self: Block) {
    return new Proxy(props, {
      get: (target, prop) => {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        const prevTarget = { ...target };
        target[prop] = value;

        self.eventBus().emit(Block.EVENTS.FLOW_CDU, prevTarget, target);

        return true;
      },
      deleteProperty: () => {
        throw new Error('Нет прав');
      },
    });
  }

  _subscribeToEvents() {
    const { events = {} } = this._props as { events: Record<string, () => void> };
    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }

  _unsubscribeFromEvents() {
    const { events = {} } = this._props as { events: Record<string, () => void> };
    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }
}
