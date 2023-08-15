import { Pipe, PipeTransform } from '@angular/core';
import { Workout } from 'src/app/shared/types/workout';

@Pipe({
  name: 'workoutTablePipe',
})
export class WorkoutTablePipe implements PipeTransform {
  transform(value: Workout, field: string): string {
    const fieldDict = {
      workoutName: value.workoutName,
      workoutType: value.workoutType?.typeName,
      exerciseTimeout: value.exerciseTimeout,
      setsCountTimeout: value.setsCountTimeout,
      cyclesCountTimeout: value.cyclesCountTimeout,
      setsCount: value.setsCount,
      cyclesCount: value.cyclesCount,
      exercises: null,
    };
    return fieldDict[field] || value[field] || '-';
  }
}
