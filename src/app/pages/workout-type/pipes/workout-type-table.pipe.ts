import { Pipe, PipeTransform } from '@angular/core';
import { WorkoutType } from 'src/app/shared/types/workout-type';

@Pipe({
  name: 'workoutTypeTablePipe',
})
export class WorkoutTypeTablePipe implements PipeTransform {
  transform(value: WorkoutType, field: string): string {
    const fieldValue = {};
    return fieldValue[field] || value[field] || '-';
  }
}
