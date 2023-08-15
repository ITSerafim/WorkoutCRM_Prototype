import { Type } from '@angular/core';

export const createDefaultRoute = (component: Type<any>, path: string = '') => [
  {
    path: path,
    component: component,
  },
];
