import { GlobalMessageService } from '../services/global-message.service';
import { AbstractApiService } from './api-service.abstract';
import { AbstractStateService } from './state-service.abstract';
import { AbstractTableService } from './table-service.abstract';

export abstract class AbstractEventHandler<T extends { id: number }, Y> {
  protected constructor(
    protected readonly api: AbstractApiService<T, Y>,
    protected readonly state: AbstractStateService<T>,
    protected readonly table: AbstractTableService,
    protected readonly globalMessageService: GlobalMessageService
  ) {}

  public getData(): void {
    this.api.getAll().subscribe((data) => {
      this.state.loadState(data);
    });
  }

  public create(value: Y, message: string): void {
    this.api.create(value).subscribe((data) => {
      this.globalMessageService.successMessage(message);
      this.state.createValue(data);
    });
  }

  public update(valueId: number, value: Y, message: string): void {
    this.api.update(valueId, value).subscribe((data) => {
      this.globalMessageService.successMessage(message);
      this.state.updateValue(data);
    });
  }

  public delete(id: number, message: string): void {
    this.api.delete(id).subscribe(() => {
      this.globalMessageService.successMessage(message);
      this.state.deleteValue(id);
    });
  }
}
