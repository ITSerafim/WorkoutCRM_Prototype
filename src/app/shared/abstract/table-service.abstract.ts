import {BehaviorSubject, catchError, Observable, tap} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import { BaseTableColumns } from "../types/base-table-columns";

export abstract class AbstractTableService {
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public abstract getTableColumns(): BaseTableColumns[];

  public startLoading<T>(request: Observable<T>): Observable<T> {
    this.toggleLoading();
    return request.pipe(
      tap(() => this.toggleLoading()),
      catchError((error) => {
        this.toggleLoading();
        throw new HttpErrorResponse(error);
      })
    );
  }

  private toggleLoading(): void {
    this.loading$.next(!this.loading$.value);
  }
}
