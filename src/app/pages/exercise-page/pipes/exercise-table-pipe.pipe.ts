import { Pipe, PipeTransform } from '@angular/core';
import { Exercise } from 'src/app/shared/types/exercise';

@Pipe({
  name: 'exerciseTablePipe',
})
export class ExerciseTablePipePipe implements PipeTransform {
  transform(value: Exercise, field: string): string {
    const fieldDict = {
      exerciseName: value.exerciseName,
      repeatsCount: value.repeatsCount,
      repeatsCountTimeout: value.repeatsCountTimeout,
    };

    return fieldDict[field] || value[field] || '-';
  }
}
