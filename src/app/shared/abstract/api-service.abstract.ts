import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class AbstractApiService<T, Y> {
  protected constructor(
    protected endpoint: BehaviorSubject<string>,
    protected readonly http: HttpClient
  ) {}

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${environment.basePath}/${this.endpoint.value}`);
  }

  public create(value: Y): Observable<T> {
    return this.http.post<T>(
      `${environment.basePath}/${this.endpoint.value}`,
      value
    );
  }

  public update(valueId: number, value: Y): Observable<T> {
    return this.http.put<T>(
      `${environment.basePath}/${this.endpoint.value}/${valueId}`,
      value
    );
  }

  public delete(valueId: number): Observable<unknown> {
    return this.http.delete<unknown>(
      `${environment.basePath}/${this.endpoint.value}/${valueId}`
    );
  }
}
