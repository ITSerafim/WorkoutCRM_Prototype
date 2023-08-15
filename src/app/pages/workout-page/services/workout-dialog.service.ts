import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { filter, Observable } from 'rxjs';
import { Workout } from 'src/app/shared/types/workout';
import { WorkoutEditDialogFormComponent } from '../dialogs/workout-edit-dialog-form/workout-edit-dialog-form.component';

@Injectable()
export class WorkoutDialogService {
  constructor(private readonly dialogService: DialogService) {}

  public openWorkoutDialog(workout?: Workout): Observable<Workout> {
    return this.dialogService
      .open(WorkoutEditDialogFormComponent, {
        header: 'Редактировать тренировку',
        data: { workout },
      })
      .onClose.pipe(filter((value) => !!value));
  }
}
