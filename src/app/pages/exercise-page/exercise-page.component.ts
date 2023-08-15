import { Component, OnInit } from '@angular/core';
import { ExerciseDialogService } from './services/exercise-dialog.service';
import { BaseStateService } from 'src/app/shared/base/state-service.base';
import { TableEventHandler } from 'src/app/shared/base/table-event-handler';
import { Exercise } from 'src/app/shared/types/exercise';
import { ExerciseMessages } from './types/exercise-messages';
import { BaseTableService } from 'src/app/shared/base/table-service.base';

@Component({
  selector: 'app-exercise-page',
  template: `
    <app-exercise-table
      (removeExercise)="onDeleteExercise($event)"
      (openCreateEditDialog)="openExerciseDialog($event)"
      [tableValues]="exercises$ | async"
      [tableColumns]="tableColumns"
      [isLoading]="isLoading$ | async"
    ></app-exercise-table>
  `,
})
export class ExercisePageComponent {
  public exercises$ = this.state.state$;

  public isLoading$ = this.table.loading$;

  public tableColumns = this.table.getTableColumns();

  constructor(
    private readonly state: BaseStateService<Exercise>,
    private readonly handler: TableEventHandler<Exercise, Exercise>,
    private readonly table: BaseTableService,
    private readonly dialog: ExerciseDialogService
  ) {
    this.handler.getData();
  }

  public openExerciseDialog(exercise: Exercise): void {
    this.dialog
      .openExerciseDialog(exercise)
      .subscribe((rawExercise) =>
        exercise
          ? this.onUpdateExercise(rawExercise, exercise.id)
          : this.onCreateExercise(rawExercise)
      );
  }

  public onCreateExercise(exercise: Exercise): void {
    this.handler.create(exercise, ExerciseMessages.CREATE);
  }

  public onUpdateExercise(exercise: Exercise, id: number): void {
    this.handler.update(id, exercise, ExerciseMessages.UPDATE);
  }

  public onDeleteExercise(id: number): void {
    this.handler.delete(id, ExerciseMessages.DELETE);
  }
}
