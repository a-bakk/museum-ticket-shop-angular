import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionConvertPipe } from './pipes/exhibition-convert.pipe';


@NgModule({
  declarations: [ExhibitionConvertPipe],
  imports: [CommonModule],
  exports: [ExhibitionConvertPipe]
})
export class SharedModule {}
