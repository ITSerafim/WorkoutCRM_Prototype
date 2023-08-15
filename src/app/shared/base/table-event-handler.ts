import { Injectable } from '@angular/core';
import { AbstractApiService } from '../abstract/api-service.abstract';
import { AbstractEventHandler } from '../abstract/event-handler.abstract';
import { AbstractStateService } from '../abstract/state-service.abstract';
import { AbstractTableService } from '../abstract/table-service.abstract';
import { GlobalMessageService } from '../services/global-message.service';
import { BaseApiService } from './api-service.base';
import { BaseStateService } from './state-service.base';
import { BaseTableService } from './table-service.base';

@Injectable()
export class TableEventHandler<
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

  public override getData(): void {
    this.table.startLoading(this.api.getAll()).subscribe((data) => {
      this.state.loadState(data);
    });
  }

  public override create(value: Y, message: string): void {
    this.table.startLoading(this.api.create(value)).subscribe((data) => {
      this.globalMessageService.successMessage(message);
      this.state.createValue(data);
    });
  }

  public override update(valueId: number, value: Y, message: string): void {
    this.table
      .startLoading(this.api.update(valueId, value))
      .subscribe((data) => {
        this.globalMessageService.successMessage(message);
        this.state.updateValue(data);
      });
  }

  public override delete(id: number, message: string): void {
    this.table.startLoading(this.api.delete(id)).subscribe(() => {
      this.globalMessageService.successMessage(message);
      this.state.deleteValue(id);
    });
  }
}
