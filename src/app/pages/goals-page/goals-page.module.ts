import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsPageComponent } from './goals-page.component';
import { GoalsPageTableComponent } from './components/goals-page-table/goals-page-table.component';
import { AddEditGoalsFormDialogComponent } from './dialogs/add-edit-goals-form-dialog/add-edit-goals-form-dialog.component';
import { GoalsTablePipe } from './pipes/goals-table.pipe';
import { TableModule } from 'primeng/table';
import { GoalsDialogService } from './services/goals-dialog.service';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { GlobalMessageService } from 'src/app/shared/services/global-message.service';
import { BehaviorSubject } from 'rxjs';
import { BaseApiService } from 'src/app/shared/base/api-service.base';
import { BaseStateService } from 'src/app/shared/base/state-service.base';
import { TableEventHandler } from 'src/app/shared/base/table-event-handler';
import { BaseTableService } from 'src/app/shared/base/table-service.base';
import { BASE_TABLE_COLUMNS } from 'src/app/shared/tokens/base-table-columns.token';
import { ENDPOINT_TOKEN } from 'src/app/shared/tokens/endpoint.token';
import { GLOBAL_HTTP_INTERCEPTOR_PROVIDER } from 'src/app/shared/providers/http-interceptor.provider';

@NgModule({
  declarations: [
    GoalsPageComponent,
    GoalsPageTableComponent,
    AddEditGoalsFormDialogComponent,
    GoalsTablePipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: GoalsPageComponent,
      },
    ]),
    TableModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ],
  providers: [
    DialogService,
    GoalsDialogService,
    GlobalMessageService,
    BaseStateService,
    BaseApiService,
    BaseTableService,
    TableEventHandler,
    {
      provide: BASE_TABLE_COLUMNS,
      useValue: [
        { field: 'goalTitle', header: 'Цель' },
        { field: 'status', header: 'Статус' },
      ],
    },
    {
      provide: ENDPOINT_TOKEN,
      useValue: new BehaviorSubject<string>('goals'),
    },
  ],
})
export class GoalsPageModule {}
