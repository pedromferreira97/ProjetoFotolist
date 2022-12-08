import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario.component';
import { FormularioRoutingModule } from './formulario-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormularioRoutingModule
  ],
  declarations: [FormularioComponent]
})
export class FormularioModule {}