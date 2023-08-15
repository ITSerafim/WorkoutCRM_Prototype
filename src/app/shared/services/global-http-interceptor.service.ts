import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { catchError, Observable, takeUntil, tap, throwError } from 'rxjs';
import { GlobalMessageService } from './global-message.service';
import { HttpCancelStateService } from './http-cancel-state.service';

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  constructor(
    private readonly router: Router,
    private readonly globalMessage: GlobalMessageService,
    private readonly httpCancelState: HttpCancelStateService
  ) {
    this.router.events.pipe().subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.httpCancelState.cancelHttpRequests();
      }
    });
  }

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(req)
      .pipe(
        catchError((error) => {
          this.globalMessage.httpErrorMessage(error);
          return throwError(error.message);
        })
      )
      .pipe(takeUntil(this.httpCancelState.pendingHttpRequests$));
  }
}
