import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExercisePageComponent } from './exercise-page.component';
import { RouterModule } from '@angular/router';
import { ExerciseTableComponent } from './components/exercise-table/exercise-table.component';
import { ExerciseTablePipePipe } from './pipes/exercise-table-pipe.pipe';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AddEditExerciseFormDialogComponent } from './dialogs/add-edit-exercise-form-dialog/add-edit-exercise-form-dialog.component';
import { ExerciseDialogService } from './services/exercise-dialog.service';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { BASE_TABLE_COLUMNS } from 'src/app/shared/tokens/base-table-columns.token';
import { ENDPOINT_TOKEN } from 'src/app/shared/tokens/endpoint.token';
import { BehaviorSubject } from 'rxjs';
import { BaseApiService } from 'src/app/shared/base/api-service.base';
import { BaseTableService } from 'src/app/shared/base/table-service.base';
import { TableEventHandler } from 'src/app/shared/base/table-event-handler';
import { BaseStateService } from 'src/app/shared/base/state-service.base';
import { GlobalMessageService } from 'src/app/shared/services/global-message.service';
import { GLOBAL_HTTP_INTERCEPTOR_PROVIDER } from 'src/app/shared/providers/http-interceptor.provider';

@NgModule({
  declarations: [
    ExercisePageComponent,
    ExerciseTableComponent,
    ExerciseTablePipePipe,
    AddEditExerciseFormDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExercisePageComponent,
      },
    ]),
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    InputNumberModule,
  ],
  providers: [
    ExerciseDialogService,
    DialogService,
    GlobalMessageService,
    BaseStateService,
    BaseApiService,
    BaseTableService,
    TableEventHandler,
    {
      provide: BASE_TABLE_COLUMNS,
      useValue: [
        { field: 'exerciseName', header: 'Название упражнения' },
        { field: 'repeatsCount', header: 'Количество повторений' },
        { field: 'repeatsCountTimeout', header: 'Отдых между повторениями' },
      ],
    },
    {
      provide: ENDPOINT_TOKEN,
      useValue: new BehaviorSubject<string>('exercises'),
    },
  ],
})
export class ExercisePageModule {}
