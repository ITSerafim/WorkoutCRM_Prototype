import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { RouterModule } from '@angular/router';
import { DividerModule } from 'primeng/divider';
import { WorkoutComponent } from './components/workout.component';
import { ExerciseComponent } from './components/exercise.component';
import { GoalComponent } from './components/goal.component';

@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPageComponent,
        children: [
          {
            path: 'workout',
            component: WorkoutComponent,
          },
          {
            path: 'exercise',
            component: ExerciseComponent,
          },
          {
            path: 'goal',
            component: GoalComponent,
          },
        ],
      },
    ]),
    DividerModule,
    WorkoutComponent,
    ExerciseComponent,
  ],
})
export class MainPageModule {}
