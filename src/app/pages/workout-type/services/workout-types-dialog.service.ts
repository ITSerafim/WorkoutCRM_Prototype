import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { filter, Observable } from 'rxjs';
import { AddEditWorkoutTypeFormDialogComponent } from '../dialogs/add-edit-workout-type-form-dialog/add-edit-workout-type-form-dialog.component';
import { WorkoutTypeWrapperComponent } from '../components/workout-type-wrapper/workout-type-wrapper.component';
import { WorkoutType } from 'src/app/shared/types/workout-type';

@Injectable()
export class WorkoutTypesDialogService {
  constructor(private readonly dialogService: DialogService) {}

  public openAddEditFormDialog(type: WorkoutType): Observable<WorkoutType> {
    return this.dialogService
      .open(AddEditWorkoutTypeFormDialogComponent, {
        header: `${type ? 'Редактировать' : 'Добавить'} тип тренировки`,
        data: { type },
      })
      .onClose.pipe(filter((value) => !!value));
  }

  public openTableDialog(): void {
    this.dialogService.open(WorkoutTypeWrapperComponent, {
      header: `Типы тренировок`,
    });
  }
}
