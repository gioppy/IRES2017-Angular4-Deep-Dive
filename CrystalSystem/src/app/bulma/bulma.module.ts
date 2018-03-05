import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnsComponent } from './columns/columns.component';
import { ColumnComponent } from './columns/column/column.component';
import { ButtonDirective } from './elements/button/button.directive';
import { BulmaMediaComponent } from './media/media.component';
import { BulmaMediaLeftComponent } from './media/media-left/media-left.component';
import { BulmaMediaContentComponent } from './media/media-content/media-content.component';
import { BulmaMediaRightComponent } from './media/media-right/media-right.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ColumnsComponent,
    ColumnComponent,
    ButtonDirective,
    BulmaMediaComponent,
    BulmaMediaLeftComponent,
    BulmaMediaContentComponent,
    BulmaMediaRightComponent
  ],
  exports: [
    ColumnsComponent,
    ColumnComponent,
    ButtonDirective,
    BulmaMediaComponent,
    BulmaMediaLeftComponent,
    BulmaMediaContentComponent,
    BulmaMediaRightComponent
  ]
})
export class BulmaModule { }
