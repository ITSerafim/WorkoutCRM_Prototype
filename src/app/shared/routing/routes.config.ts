import { RouteConfig } from './route-config';

export const ROUTES_CONFIG: RouteConfig[] = [
  {
    path: 'main',
    loadModule: () =>
      import('src/app/pages/main-page/main-page.module').then(
        (m) => m.MainPageModule
      ),
  },
  {
    path: 'workouts',
    loadModule: () =>
      import('src/app/pages/workout-page/workout-page.module').then(
        (m) => m.WorkoutPageModule
      ),
  },
  {
    path: 'exercises',
    loadModule: () =>
      import('src/app/pages/exercise-page/exercise-page.module').then(
        (m) => m.ExercisePageModule
      ),
  },
  {
    path: 'profile',
    loadModule: () =>
      import('src/app/pages/profile-page/profile-page.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'goals',
    loadModule: () =>
      import('src/app/pages/goals-page/goals-page.module').then(
        (m) => m.GoalsPageModule
      ),
  },
  {
    path: 'timetable',
    loadModule: () =>
      import('src/app/pages/timetable/timetable.module').then(
        (m) => m.TimetableModule
      ),
  },
  {
    path: '',
    redirect: {
      redirectTo: 'main',
      pathMatch: 'full',
    },
  },
];
