import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseTableColumns } from 'src/app/shared/types/base-table-columns';
import { Goal } from 'src/app/shared/types/goal';

@Component({
  selector: 'app-goals-page-table',
  templateUrl: './goals-page-table.component.html',
  styleUrls: ['./goals-page-table.component.scss'],
})
export class GoalsPageTableComponent {
  @Output()
  public removeGoal = new EventEmitter<number>();

  @Output()
  public openCreateEditDialog = new EventEmitter<Goal | null>();

  @Input()
  public goals: Goal[];

  @Input()
  public tableColumns: BaseTableColumns[];

  @Input()
  public isLoading: boolean;
}
