import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseTableService } from 'src/app/shared/base/table-service.base';
import { BaseTableColumns } from 'src/app/shared/types/base-table-columns';
import { Exercise } from 'src/app/shared/types/exercise';

@Component({
  selector: 'app-exercise-table',
  templateUrl: './exercise-table.component.html',
  styles: [
    `
      :host {
        .table-btns {
          display: flex;
          gap: 0.3rem;
        }
      }
    `,
  ],
})
export class ExerciseTableComponent {
  @Output()
  public removeExercise = new EventEmitter<number>();

  @Output()
  public openCreateEditDialog = new EventEmitter<Exercise | null>();

  @Input()
  public tableValues: Exercise[];

  @Input()
  public tableColumns: BaseTableColumns[];

  @Input()
  public isLoading: boolean;
}
