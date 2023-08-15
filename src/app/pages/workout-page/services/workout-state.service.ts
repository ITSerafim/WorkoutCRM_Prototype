import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Workout} from "../../../models/workout";
import {AbstractStateService} from "../../../abstract/AbstractStateService";


@Injectable()
export class WorkoutStateService extends AbstractStateService<Workout> {
  constructor() {
    super()
  }
}
