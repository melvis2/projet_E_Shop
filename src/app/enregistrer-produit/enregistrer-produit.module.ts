import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnregistrerProduitPageRoutingModule } from './enregistrer-produit-routing.module';

import { EnregistrerProduitPage } from './enregistrer-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnregistrerProduitPageRoutingModule
  ],
  declarations: [EnregistrerProduitPage]
})
export class EnregistrerProduitPageModule {}
