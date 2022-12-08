import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotolistComponent } from './fotolist.component';

const routes: Routes = [
    {path: '', component: FotolistComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class FotolistRoutingModule {}