import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Workout} from "../../../models/workout";
import {AbstractHttpService} from "../../../abstract/AbstractHttpService";


@Injectable()
export class WorkoutHttpService extends AbstractHttpService<Workout, Workout> {
  constructor(protected override readonly http: HttpClient) {
    super('workouts', http)
  }
}
