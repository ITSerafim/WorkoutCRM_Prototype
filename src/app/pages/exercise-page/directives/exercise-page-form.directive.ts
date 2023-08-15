import { Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseDialogService } from 'src/app/shared/base/dialog-service.base';
import { Exercise } from 'src/app/shared/types/exercise';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';

@Directive()
export class ExercisePageFormDirective extends BaseDialogService<Exercise> {
  protected constructor(
    protected readonly fb: FormBuilder,
    protected override readonly ref: DynamicDialogRef,
    protected override readonly config: DynamicDialogConfig,
    protected override readonly service: DialogService
  ) {
    super(ref, config, service);
  }

  public createForm(): FormGroup {
    return this.fb.group({
      exerciseName: [null, Validators.required],
      repeatsCount: [null],
      repeatsCountTimeout: [null],
    });
  }

  public fillForm(form: FormGroup, exercise: Exercise): void {
    if (!exercise) return;
    form.patchValue({
      ...exercise,
    });
  }
}
