import { Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Workout } from 'src/app/shared/types/workout';

@Directive()
export class WorkoutFormDirective {
  protected constructor(protected readonly fb: FormBuilder) {}

  public createForm(): FormGroup {
    return this.fb.group({
      workoutName: [null, Validators.required],
      exerciseTimeout: [null],
      setsCountTimeout: [null],
      cyclesCountTimeout: [null],
      cyclesCount: [null],
      setsCount: [null],
      workoutTypeId: [null],
      exercises: [null, Validators.required],
    });
  }

  public fillForm(form: FormGroup, workout: Workout): void {
    if (!workout) return;
    form.patchValue({
      ...workout,
    });
  }
}
