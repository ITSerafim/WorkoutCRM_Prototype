import { Component, OnInit } from '@angular/core';
import { WorkoutTypesFormService } from '../../services/workout-types-form.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormGroup } from '@angular/forms';
import { WorkoutType } from 'src/app/shared/types/workout-type';

@Component({
  selector: 'app-add-edit-workout-type-form-dialog',
  templateUrl: './add-edit-workout-type-form-dialog.component.html',
  styleUrls: ['./add-edit-workout-type-form-dialog.component.scss'],
})
export class AddEditWorkoutTypeFormDialogComponent implements OnInit {
  public workoutTypeForm!: FormGroup;

  constructor(
    private readonly form: WorkoutTypesFormService,
    private readonly config: DynamicDialogConfig,
    private readonly ref: DynamicDialogRef
  ) {}

  ngOnInit(): void {
    this.workoutTypeForm = this.form.createForm();
    this.form.fillForm(this.workoutTypeForm, this.config.data?.type);
  }

  public submitForm(): void {
    this.dialogClose({
      ...this.workoutTypeForm.value,
    });
  }

  public dialogClose(type?: WorkoutType): void {
    this.ref.close(type);
  }
}
