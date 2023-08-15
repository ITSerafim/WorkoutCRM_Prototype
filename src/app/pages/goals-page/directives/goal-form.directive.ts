import { Directive } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { BaseDialogService } from 'src/app/shared/base/dialog-service.base';
import { Goal } from 'src/app/shared/types/goal';

@Directive()
export class GoalFormDirective extends BaseDialogService<Goal> {
  protected constructor(
    protected readonly fb: FormBuilder,
    protected override readonly ref: DynamicDialogRef,
    protected override readonly config: DynamicDialogConfig,
    protected override readonly service: DialogService
  ) {
    super(ref, config, service);
  }

  protected createForm(): FormGroup {
    return this.fb.group({
      goalTitle: [null, Validators.required],
      status: [null],
    });
  }

  protected fillForm(form: FormGroup, goal: Goal): void {
    if (!goal) return;
    form.patchValue({
      ...goal,
    });
  }
}
