import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseTableColumns } from 'src/app/shared/types/base-table-columns';
import { Workout } from 'src/app/shared/types/workout';

@Component({
  selector: 'app-workout-created-table',
  templateUrl: './workout-created-table.component.html',
  styleUrls: ['./workout-created-table.component.scss'],
})
export class WorkoutCreatedTableComponent {
  @Input()
  public workouts: Workout[];

  @Input()
  public tableColumns: BaseTableColumns[];

  @Input()
  public isLoading: boolean;

  @Output()
  public editWorkout = new EventEmitter<Workout>();

  @Output()
  public deleteWorkout = new EventEmitter<number>();
}
