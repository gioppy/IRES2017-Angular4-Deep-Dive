import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsComponent } from './columns/columns.component';
import { ColumnComponent } from './columns/column/column.component';
import { ButtonDirective } from './elements/button/button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColumnsComponent,
    ColumnComponent,
    ButtonDirective
  ],
  exports: [
    ColumnsComponent,
    ColumnComponent,
    ButtonDirective
  ]
})
export class BulmaModule { }
