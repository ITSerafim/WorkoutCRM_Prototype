import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseTableColumns } from 'src/app/shared/types/base-table-columns';
import { WorkoutType } from 'src/app/shared/types/workout-type';

@Component({
  selector: 'app-workout-type-table-dialog',
  templateUrl: './workout-type-table-dialog.component.html',
  styleUrls: ['./workout-type-table-dialog.component.scss'],
})
export class WorkoutTypeTableDialogComponent {
  @Output()
  public deleteWorkoutType = new EventEmitter<number>();

  @Output()
  public openCreateEditDialog = new EventEmitter<WorkoutType | null>();

  @Input()
  public workoutTypes: WorkoutType[];

  @Input()
  public tableColumns: BaseTableColumns[];

  @Input()
  public isLoading: boolean;
}
