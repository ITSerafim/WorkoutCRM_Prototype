import { Component } from '@angular/core';
import { WorkoutTypesDialogService } from '../../services/workout-types-dialog.service';

@Component({
  selector: 'app-workout-type-init',
  template: ` <button
    pButton
    icon="pi pi-plus"
    [pTooltip]="'Добавить тип тренировки'"
    tooltipPosition="right"
    (click)="openTableDialog()"
    class="p-button-secondary"
  ></button>`,
})
export class WorkoutTypeInitComponent {
  constructor(private readonly dialog: WorkoutTypesDialogService) {}

  public openTableDialog(): void {
    this.dialog.openTableDialog();
  }
}
