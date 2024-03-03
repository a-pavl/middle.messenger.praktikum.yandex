import { IProps } from '../../types';

export type Listener<T extends unknown[] = IProps[]> = (...args: T) => void;
export type Listeners<T extends unknown[] = IProps[]> = Listener<T>[];
export type EventBusListners<T extends unknown[] = IProps[]> = Record<string, Listeners<T>>;

export type On = (event: string, callback: Listener) => void;
export type Off = (event: string, callback: Listener) => void;
export type Emit<T extends unknown[] = IProps[]> = (event: string, ...args: T) => void;

export interface IEventBus {
  listeners: EventBusListners;
  on: On;
  off: Off;
  emit: Emit;
}
