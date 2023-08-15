import {Exercise} from "./exercise";
import {WorkoutType} from "./workout-type";

export interface Workout {
  id: number;
  workoutName: string;
  exerciseTimeout: string;
  setsCountTimeout: string;
  cyclesCountTimeout: string;
  cyclesCount: number;
  setsCount: number;
  workoutType: WorkoutType;
  exercises: Exercise[];
}
