import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnregistrerProduitPage } from './enregistrer-produit.page';

const routes: Routes = [
  {
    path: '',
    component: EnregistrerProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnregistrerProduitPageRoutingModule {}
