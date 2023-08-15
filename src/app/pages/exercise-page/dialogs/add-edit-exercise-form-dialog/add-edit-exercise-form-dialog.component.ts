import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ExercisePageFormDirective } from '../../directives/exercise-page-form.directive';

@Component({
  selector: 'app-add-edit-exercise-form-dialogs',
  templateUrl: './add-edit-exercise-form-dialog.component.html',
  styles: [
    `
      :host {
        .exercise-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .form-btns {
          display: flex;
          gap: 1rem;
        }
      }
    `,
  ],
})
export class AddEditExerciseFormDialogComponent
  extends ExercisePageFormDirective
  implements OnInit
{
  public exerciseForm!: FormGroup;

  constructor(
    protected readonly configDialog: DynamicDialogConfig,
    protected readonly refDialog: DynamicDialogRef,
    protected readonly serviceDialog: DialogService,
    protected override readonly fb: FormBuilder
  ) {
    super(fb, refDialog, configDialog, serviceDialog);
  }

  ngOnInit(): void {
    this.exerciseForm = this.createForm();
    this.fillForm(this.exerciseForm, this.config.data?.exercise);
  }

  public submitForm(): void {
    this.close({ ...this.exerciseForm.value });
  }
}
