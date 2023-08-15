import {Injectable} from "@angular/core";
import {BaseTableColumns} from "../../../models/base-table-columns";
import {AbstractTableService} from "../../../abstract/AbstractTableService";


@Injectable()
export class WorkoutCreatedTableService extends AbstractTableService {
  constructor() {
    super();
  }

  public getTableColumns(): BaseTableColumns[] {
    return [

    ]
  }
}
