import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BaseStateService } from 'src/app/shared/base/state-service.base';
import { TableEventHandler } from 'src/app/shared/base/table-event-handler';
import { BaseTableService } from 'src/app/shared/base/table-service.base';
import { Workout } from 'src/app/shared/types/workout';
import { WorkoutDialogService } from './services/workout-dialog.service';
import { WorkoutMessages } from './types/workout-messages';

@Component({
  selector: 'app-workout-page',
  template: ` <p-tabMenu [model]="workoutTabs"></p-tabMenu>
    <div *ngIf="activeWorkoutTab === 0" class="workout-create-form">
      <app-workout-create-form
        (submitForm)="createWorkout($event)"
      ></app-workout-create-form>
    </div>
    <div *ngIf="activeWorkoutTab === 1" class="workout-created-table">
      <app-workout-created-table
        [workouts]="workouts$ | async"
        [tableColumns]="tableColumns"
        [isLoading]="isLoading$ | async"
        (deleteWorkout)="deleteWorkout($event)"
        (editWorkout)="editWorkout($event)"
      ></app-workout-created-table>
    </div>`,
  styles: [
    `
      :host {
        .workout-types {
          position: absolute;
          bottom: 5rem;
          right: 5rem;
        }
      }

      :host ::ng-deep {
        .p-tabmenu-nav,
        .p-menuitem-text,
        .p-menuitem-link,
        p-tabmentitem:not(p-highlight) {
          background-color: #171717 !important;
        }

        .workout-create-form,
        .workout-created-table {
          padding: 2rem;
        }
      }
    `,
  ],
})
export class WorkoutPageComponent implements OnInit {
  public workoutTabs: MenuItem[];

  public workouts$ = this.workoutState.state$;

  public tableColumns = this.workoutTable.getTableColumns();

  public isLoading$ = this.workoutTable.loading$;

  public activeWorkoutTab: number = 0;

  constructor(
    private readonly workoutState: BaseStateService<Workout>,
    private readonly workoutHandler: TableEventHandler<Workout, Workout>,
    private readonly workoutTable: BaseTableService,
    private readonly dialog: WorkoutDialogService
  ) {}

  ngOnInit(): void {
    this.workoutTabs = [
      {
        label: 'Создать тренировку',
        command: () => {
          this.activeWorkoutTab = 0;
        },
      },
      {
        label: 'Список созданных тренировок',
        command: () => {
          this.activeWorkoutTab = 1;
        },
      },
    ];
    this.workoutHandler.getData();
  }

  public openWorkoutDialog(workout: Workout): void {
    this.dialog.openWorkoutDialog(workout).subscribe((rawWorkout) => {
      this.editWorkout(rawWorkout);
    });
  }

  public createWorkout(workout: Workout) {
    this.workoutHandler.create(workout, WorkoutMessages.CREATE);
  }

  public editWorkout(workout: Workout): void {
    this.workoutHandler.update(workout.id, workout, WorkoutMessages.UPDATE);
  }

  public deleteWorkout(id: number): void {
    this.workoutHandler.delete(id, WorkoutMessages.DELETE);
  }
}
