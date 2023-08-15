import { Type } from '@angular/core';
import { LoadChildrenCallback } from '@angular/router';

export interface RouteConfig {
  path: string;
  loadModule?: LoadChildrenCallback;
  redirect?: RedirectRoute;
  loadComponent?: () => Type<unknown>;
}

export interface RedirectRoute {
  redirectTo: string;
  pathMatch: string;
}
