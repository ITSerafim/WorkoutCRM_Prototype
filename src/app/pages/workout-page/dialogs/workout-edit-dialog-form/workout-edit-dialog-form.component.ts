import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WorkoutFormDirective } from '../../directives/workout-form.directive';
import { Workout } from 'src/app/shared/types/workout';

@Component({
  selector: 'app-workout-edit-dialog-form',
  templateUrl: './workout-edit-dialog-form.component.html',
  styleUrls: ['./workout-edit-dialog-form.component.scss'],
})
export class WorkoutEditDialogFormComponent
  extends WorkoutFormDirective
  implements OnInit
{
  public workoutForm: FormGroup;

  constructor(
    protected override fb: FormBuilder,
    private readonly config: DynamicDialogConfig,
    private readonly ref: DynamicDialogRef
  ) {
    super(fb);
  }

  ngOnInit(): void {
    this.workoutForm = this.createForm();
    this.fillForm(this.workoutForm, this.config.data?.workout);
  }

  public submitForm(): void {
    this.dialogClose({
      ...this.workoutForm.value,
    });
  }

  public dialogClose(workout?: Workout): void {
    this.ref.close(workout);
  }
}
