import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ListComponent } from './list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { ExhibitionConvertPipe } from '../../shared/pipes/exhibition-convert.pipe';


@NgModule({
  declarations: [
    ProfileComponent,
    ListComponent,
    ExhibitionConvertPipe
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class ProfileModule {

}
