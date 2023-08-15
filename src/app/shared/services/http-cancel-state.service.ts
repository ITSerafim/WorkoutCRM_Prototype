import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpCancelStateService {
  public readonly pendingHttpRequests$ = new Subject<void>();

  public cancelHttpRequests(): void {
    this.pendingHttpRequests$.next();
  }
}
