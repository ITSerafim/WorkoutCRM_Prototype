import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCardComponent } from './base-card.component';



@NgModule({
    declarations: [
        BaseCardComponent
    ],
    exports: [
        BaseCardComponent
    ],
    imports: [
        CommonModule
    ]
})
export class BaseCardModule { }
