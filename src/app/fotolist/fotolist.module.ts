import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FotolistComponent } from './fotolist.component';
import { FotolistRoutingModule } from './fotolist-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FotolistRoutingModule
  ],
  declarations: [FotolistComponent]
})
export class FotolistModule {}