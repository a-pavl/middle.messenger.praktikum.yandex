import {
  IEventBus, EventBusListners, On, Off, Emit,
} from './types';

export class EventBus implements IEventBus {
  listeners: EventBusListners = {};

  constructor() {
    this.listeners = {};
  }

  on: On = (event, callback) => {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]!.push(callback);
  };

  off: Off = (event, callback) => {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event]!.filter(
      (listener) => listener !== callback,
    );
  };

  emit: Emit = (event, ...args) => {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event]!.forEach((listener) => {
      listener(...args);
    });
  };
}
