import { Inject, Injectable } from '@angular/core';
import { AbstractTableService } from '../abstract/table-service.abstract';
import { BASE_TABLE_COLUMNS } from '../tokens/base-table-columns.token';
import { BaseTableColumns } from '../types/base-table-columns';

@Injectable()
export class BaseTableService extends AbstractTableService {
  constructor(
    @Inject(BASE_TABLE_COLUMNS)
    private readonly baseTableColumns: BaseTableColumns[]
  ) {
    super();
  }

  public getTableColumns(): BaseTableColumns[] {
    return this.baseTableColumns;
  }
}
