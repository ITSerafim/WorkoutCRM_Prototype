import { BehaviorSubject, Observable } from 'rxjs';

export abstract class AbstractStateService<T extends { id: number }> {
  private stateValue$ = new BehaviorSubject<T[]>([]);

  public state$: Observable<T[]> = this.stateValue$.asObservable();

  public loadState(value: T[]): void {
    this.stateValue$.next(value);
  }

  public createValue(value: T): void {
    const state = this.stateValue$.value;
    this.stateValue$.next([value, ...state]);
  }

  public updateValue(value: T): void {
    const state = this.stateValue$.value;
    this.stateValue$.next(
      state.map((data) => (data.id === value.id ? value : data))
    );
  }

  public deleteValue(id: number): void {
    const state = this.stateValue$.value;
    this.stateValue$.next(state.filter((data) => data.id !== id));
  }
}
