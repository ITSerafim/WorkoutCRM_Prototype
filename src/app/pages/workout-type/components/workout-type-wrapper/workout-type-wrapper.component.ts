import { Component, OnInit } from '@angular/core';
import { WorkoutTypesDialogService } from '../../services/workout-types-dialog.service';
import { WorkoutType } from 'src/app/shared/types/workout-type';
import { BaseStateService } from 'src/app/shared/base/state-service.base';
import { BaseEventHandler } from 'src/app/shared/base/event-handler.base';
import { BaseTableService } from 'src/app/shared/base/table-service.base';
import { WorkoutTypeMessage } from '../../types/workout-type-message';

@Component({
  selector: 'app-workout-type-wrapper',
  template: `<app-workout-type-table-dialog
    (deleteWorkoutType)="onDeleteType($event)"
    (openCreateEditDialog)="openWorkoutTypeDialog($event)"
    [workoutTypes]="types$ | async"
    [tableColumns]="tableColumns"
    [isLoading]="isLoading$ | async"
  ></app-workout-type-table-dialog> `,
})
export class WorkoutTypeWrapperComponent implements OnInit {
  public types$ = this.state.state$;

  public isLoading$ = this.table.loading$;

  public tableColumns = this.table.getTableColumns();

  constructor(
    private readonly state: BaseStateService<WorkoutType>,
    private readonly handler: BaseEventHandler<WorkoutType, WorkoutType>,
    private readonly table: BaseTableService,
    private readonly dialog: WorkoutTypesDialogService
  ) {}

  ngOnInit(): void {
    this.handler.getData();
  }

  public openWorkoutTypeDialog(type: WorkoutType): void {
    this.dialog
      .openAddEditFormDialog(type)
      .subscribe((rawType) =>
        type ? this.onUpdateType(rawType, type.id) : this.onCreateType(rawType)
      );
  }

  public onCreateType(type: WorkoutType): void {
    this.handler.create(type, WorkoutTypeMessage.CREATE);
  }

  public onUpdateType(type: WorkoutType, id: number): void {
    this.handler.update(id, type, WorkoutTypeMessage.UPDATE);
  }

  public onDeleteType(id: number): void {
    this.handler.delete(id, WorkoutTypeMessage.DELETE);
  }
}
