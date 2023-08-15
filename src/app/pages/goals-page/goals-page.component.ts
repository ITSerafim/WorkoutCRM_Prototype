import { Component, OnInit } from '@angular/core';
import { BaseStateService } from 'src/app/shared/base/state-service.base';
import { TableEventHandler } from 'src/app/shared/base/table-event-handler';
import { Goal } from 'src/app/shared/types/goal';
import { GoalsMessages } from './types/goals-messages';
import { BaseTableService } from 'src/app/shared/base/table-service.base';
import { GoalsDialogService } from './services/goals-dialog.service';

@Component({
  selector: 'app-goals-page',
  templateUrl: './goals-page.component.html',
  styleUrls: ['./goals-page.component.scss'],
})
export class GoalsPageComponent implements OnInit {
  public goals$ = this.state.state$;

  public tableColumns = this.table.getTableColumns();

  public isLoading$ = this.table.loading$;

  constructor(
    private readonly state: BaseStateService<Goal>,
    private readonly handler: TableEventHandler<Goal, Goal>,
    private readonly table: BaseTableService,
    private readonly dialogService: GoalsDialogService
  ) {}

  ngOnInit(): void {
    this.handler.getData();
  }

  public openGoalsDialog(goal?: Goal): void {
    this.dialogService.openGoalsDialog(goal).subscribe((rawGoal) => {
      goal ? this.onUpdateGoal(rawGoal, goal.id) : this.onAddGoal(rawGoal);
    });
  }

  public onAddGoal(goal: Goal): void {
    this.handler.create(goal, GoalsMessages.CREATE);
  }

  public onUpdateGoal(goal: Goal, id: number): void {
    this.handler.update(id, goal, GoalsMessages.UPDATE);
  }

  public onDeleteGoal(id: number): void {
    this.handler.delete(id, GoalsMessages.DELETE);
  }
}
