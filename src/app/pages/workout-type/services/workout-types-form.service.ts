import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkoutType } from 'src/app/shared/types/workout-type';

@Injectable()
export class WorkoutTypesFormService {
  constructor(private readonly fb: FormBuilder) {}

  public createForm(): FormGroup {
    return this.fb.group({
      typeName: [null, Validators.required],
    });
  }

  public fillForm(form: FormGroup, type: WorkoutType): void {
    if (!type) return;
    form.patchValue({
      ...type,
    });
  }
}
