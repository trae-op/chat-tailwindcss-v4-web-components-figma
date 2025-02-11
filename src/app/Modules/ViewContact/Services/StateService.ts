import { Module as StateModule } from "../../../Shared/Modules/StateManager";
import type { TData } from "./types";

const state = new StateModule({});

export class StateService {
  private state: StateModule<TData>;

  constructor() {
    this.state = state;
  }

  getState() {
    return this.state.getState();
  }

  setState(data: TData | undefined) {
    this.state.setState(data || {});
  }
}
