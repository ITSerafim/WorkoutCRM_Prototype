import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogOptions } from '../types/dialog-options';

export abstract class AbstractDialogService<T> {
  constructor(
    protected readonly dialogRef: DynamicDialogRef,
    protected readonly dialogConfig: DynamicDialogConfig,
    protected readonly dialogService: DialogService,
  ) {}

  public openDialog(options: DialogOptions): DynamicDialogRef{
    return this.dialogService.open(options.component, options.config)
  }

  public close(value?: T): void{
    this.dialogRef.close(value)
  }
}
