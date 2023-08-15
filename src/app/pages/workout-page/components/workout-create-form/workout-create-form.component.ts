import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WorkoutFormDirective } from '../../directives/workout-form.directive';
import { Workout } from 'src/app/shared/types/workout';

@Component({
  selector: 'app-workout-create-form',
  templateUrl: './workout-create-form.component.html',
  styleUrls: ['./workout-create-form.component.scss'],
})
export class WorkoutCreateFormComponent
  extends WorkoutFormDirective
  implements OnInit
{
  public workoutForm: FormGroup;

  @Output()
  public submitForm = new EventEmitter<Workout>();

  constructor(protected override readonly fb: FormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
    this.workoutForm = this.createForm();
  }

  public submit(): void {
    this.submitForm.emit({ ...this.workoutForm.value });
  }
}
