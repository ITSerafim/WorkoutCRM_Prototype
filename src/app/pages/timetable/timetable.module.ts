import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TimetableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TimetableComponent }]),
  ],
})
export class TimetableModule {}
