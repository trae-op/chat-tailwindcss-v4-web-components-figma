import { BehaviorSubject, type Observable } from "rxjs";

export class Module<D> {
  private state$: BehaviorSubject<D>;

  constructor(initialState: D) {
    this.state$ = new BehaviorSubject(initialState);
  }

  setState(newState: D): void {
    this.state$.next(newState);
  }

  getState(): Observable<D> {
    return this.state$.asObservable();
  }

  getCurrentState(): D {
    return this.state$.getValue();
  }

  destroy(): void {
    this.state$.complete();
  }
}
