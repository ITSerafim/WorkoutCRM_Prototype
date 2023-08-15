import {Injectable} from "@angular/core";
import {WorkoutStateService} from "./workout-state.service";
import {WorkoutHttpService} from "./workout-http.service";
import {WorkoutCreatedTableService} from "./workout-created-table.service";
import {Workout} from "../../../models/workout";


@Injectable()
export class WorkoutStateHandlerService {


  constructor(
    private readonly state: WorkoutStateService,
    private readonly api: WorkoutHttpService,
    private readonly table: WorkoutCreatedTableService,
  ) {
  }

  public getStateHandler(): void {
    this.table.startLoading(this.api.getAll()).subscribe(workouts => this.state.loadState(workouts))
  }

  public createWorkout(workout: Workout): void {
    this.api.create(workout).subscribe(data => this.state.createValue(data));
  }

  public updateWorkout(workout: Workout, id: number): void {
    this.table.startLoading(this.api.update(id, workout)).subscribe((data) => this.state.updateValue(data))
  }

  public deleteWorkout(id: number): void {
    this.table.startLoading(this.api.delete(id)).subscribe(() => this.state.deleteValue(id));
  }
}
