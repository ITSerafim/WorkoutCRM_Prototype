import { Injectable } from '@angular/core';
import { AbstractEventHandler } from '../abstract/event-handler.abstract';
import { GlobalMessageService } from '../services/global-message.service';
import { BaseApiService } from './api-service.base';
import { BaseStateService } from './state-service.base';
import { BaseTableService } from './table-service.base';

@Injectable()
export class BaseEventHandler<
  T extends { id: number },
  Y
> extends AbstractEventHandler<T, Y> {
  constructor(
    protected override readonly api: BaseApiService<T, Y>,
    protected override readonly state: BaseStateService<T>,
    protected override readonly table: BaseTableService,
    protected override readonly globalMessageService: GlobalMessageService
  ) {
    super(api, state, table, globalMessageService);
  }
}
