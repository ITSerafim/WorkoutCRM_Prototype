import { Injectable } from '@angular/core';
import { AbstractStateService } from '../abstract/state-service.abstract';

@Injectable()
export class BaseStateService<
  T extends { id: number }
> extends AbstractStateService<T> {
  constructor() {
    super();
  }

}
