import { Block, EventBus } from "@/lib";
import { TAppState } from "@/middleware/store/types";
import isEqual from "../IsEqual";

export enum StoreEvents {
  Updated = 'Updated'
}

export class Store<State extends Record<string, unknown>> extends EventBus {
  private state: State = {} as State;

  constructor(initState: State) {
    super();
    this.state = initState;
    this.set(this.state);
  }

  public getState() {
    return this.state;
  }

  public set(nextState: Partial<State>) {
    const prevState = {...this.state};
    this.state = {...this.state, ...nextState};
    this.emit(StoreEvents.Updated, prevState, nextState);
  }
}

export function connectToStore(
  mapStateToProps: (state: TAppState) => Partial<TAppState>,
) {
  return function (Component: typeof Block) {
    return class extends Component {
      private onChangeStoreCallback: () => void;
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(props: any) {
        const store = window.store;
        // сохраняем начальное состояние
        let state = mapStateToProps(store.getState());

        super({ ...props, ...state });

        this.onChangeStoreCallback = () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());

          // если что-то из используемых данных поменялось, обновляем компонент
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          // не забываем сохранить новое состояние
          state = newState;
        };

        // подписываемся на событие
        store.on(StoreEvents.Updated, this.onChangeStoreCallback);
      }

      componentWillUnmount() {
        super.componentWillUnmount();
        window.store.off(
          StoreEvents.Updated,
          this.onChangeStoreCallback,
        );
      }
    };
  };
}
