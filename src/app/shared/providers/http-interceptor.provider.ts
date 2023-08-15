import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';
import { GlobalHttpInterceptor } from '../services/global-http-interceptor.service';

export const GLOBAL_HTTP_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: GlobalHttpInterceptor,
  multi: true,
};
