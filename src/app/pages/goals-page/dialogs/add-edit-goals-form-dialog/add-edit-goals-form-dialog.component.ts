import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { GoalFormDirective } from '../../directives/goal-form.directive';

@Component({
  selector: 'app-add-edit-goals-form-dialog',
  templateUrl: './add-edit-goals-form-dialog.component.html',
  styleUrls: ['./add-edit-goals-form-dialog.component.scss'],
})
export class AddEditGoalsFormDialogComponent
  extends GoalFormDirective
  implements OnInit
{
  public goalForm!: FormGroup;

  constructor(
    protected readonly configDialog: DynamicDialogConfig,
    protected readonly refDialog: DynamicDialogRef,
    protected readonly serviceDialog: DialogService,
    protected override readonly fb: FormBuilder
  ) {
    super(fb, refDialog, configDialog, serviceDialog);
  }

  ngOnInit(): void {
    this.goalForm = this.createForm();
    this.fillForm(this.goalForm, this.config.data);
  }

  public submitForm(): void {
    this.close(this.goalForm.value);
  }
}
