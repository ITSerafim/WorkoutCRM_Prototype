import { Injectable } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { AbstractDialogService } from '../abstract/dialog-service.abstract';

@Injectable()
export class BaseDialogService<T> extends AbstractDialogService<T> {
  constructor(
    protected readonly ref: DynamicDialogRef,
    protected readonly config: DynamicDialogConfig,
    protected readonly service: DialogService
  ) {
    super(ref, config, service);
  }
}
