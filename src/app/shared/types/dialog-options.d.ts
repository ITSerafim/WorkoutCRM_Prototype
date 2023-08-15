import { Type } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

export interface DialogOptions {
  component: Type<any>;
  config: DynamicDialogConfig;
}
