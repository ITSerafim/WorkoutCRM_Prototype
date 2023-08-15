import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkoutPageComponent } from './workout-page.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterModule } from '@angular/router';
import { WorkoutCreateFormComponent } from './components/workout-create-form/workout-create-form.component';
import { WorkoutCreatedTableComponent } from './components/workout-created-table/workout-created-table.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { WorkoutTablePipe } from './pipes/workout-table.pipe';
import { BaseCardModule } from '../../shared/base-card/base-card.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { ReactiveFormsModule } from '@angular/forms';
import { WorkoutEditDialogFormComponent } from './dialogs/workout-edit-dialog-form/workout-edit-dialog-form.component';
import { WorkoutDialogService } from './services/workout-dialog.service';
import { DialogService } from 'primeng/dynamicdialog';
import { BehaviorSubject } from 'rxjs';
import { BaseApiService } from 'src/app/shared/base/api-service.base';
import { BaseStateService } from 'src/app/shared/base/state-service.base';
import { TableEventHandler } from 'src/app/shared/base/table-event-handler';
import { BaseTableService } from 'src/app/shared/base/table-service.base';
import { GlobalMessageService } from 'src/app/shared/services/global-message.service';
import { BASE_TABLE_COLUMNS } from 'src/app/shared/tokens/base-table-columns.token';
import { ENDPOINT_TOKEN } from 'src/app/shared/tokens/endpoint.token';
import { BaseEventHandler } from 'src/app/shared/base/event-handler.base';
import { GLOBAL_HTTP_INTERCEPTOR_PROVIDER } from 'src/app/shared/providers/http-interceptor.provider';

@NgModule({
  declarations: [
    WorkoutTablePipe,
    WorkoutPageComponent,
    WorkoutCreateFormComponent,
    WorkoutCreatedTableComponent,
    WorkoutEditDialogFormComponent,
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: WorkoutPageComponent }]),
    CommonModule,
    TabMenuModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    BaseCardModule,
    MultiSelectModule,
    ReactiveFormsModule,
  ],
  providers: [
    WorkoutDialogService,
    DialogService,
    GlobalMessageService,
    BaseStateService,
    BaseApiService,
    BaseTableService,
    TableEventHandler,
    BaseEventHandler,
    {
      provide: BASE_TABLE_COLUMNS,
      useValue: [
        { field: 'workoutName', header: 'Название тренировки' },
        { field: 'workoutType', header: 'Тип тренировки' },
        { field: 'cyclesCount', header: 'Кол-во кругов' },
        { field: 'setsCount', header: 'Кол-во подходов' },
        { field: 'exerciseTimeout', header: 'Время отдыха между упражнениями' },
        { field: 'setsCountTimeout', header: 'Время отдыха между подходами' },
        { field: 'cyclesCountTimeout', header: 'Время отдыха между кругами' },
        { field: 'exercises', header: 'Список упражнений' },
      ],
    },
    {
      provide: ENDPOINT_TOKEN,
      useValue: new BehaviorSubject<string>('workouts'),
    },
  ],
})
export class WorkoutPageModule {}
