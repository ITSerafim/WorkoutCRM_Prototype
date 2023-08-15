import { Route, Routes } from '@angular/router';
import { RouteConfig } from './route-config';

export class CustomRoute {
  public static lazyModuleRoute(configs: RouteConfig[]): Routes {
    const routes = [];
    configs.forEach((config) => {
      routes.push({
        path: config.path,
        loadChildren: config.loadModule,
        loadComponent: config.loadComponent,
        redirectTo: config?.redirect?.redirectTo,
        pathMatch: config?.redirect?.pathMatch,
      });
    });
    return routes;
  }
}
