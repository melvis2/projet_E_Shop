import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, ModalController } from '@ionic/angular';
import { Product } from 'src/models/interface-product';
import { Router } from '@angular/router';
import { EnregistrerProduitPage } from '../enregistrer-produit/enregistrer-produit.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Articles: Product[];

  constructor(
    public router: Router,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public actionCtrl: ActionSheetController,
    public modalCtrl: ModalController
  ) {
    this.Articles = [
      {
        name: 'Telephone Iphone',
        productID: 1,
        description: 'Venez decouvrir notre nouvele serie de telephone de marque Iphone aussi incroyable les uns que les autres',
        price: 100000,
        stockAvailable: 10,
        categoryID: 1,
        manufacturer: 'ABC Manufacturer',
        weight: 0.5,
        color: 'Black',
        size: 'M',
        image: [
          'assets/imgs/telephone/1.jpeg', 
          'assets/imgs/telephone/2.jpeg', 
          'assets/imgs/telephone/3.jpeg',
          'assets/imgs/telephone/4.jpeg',
          'assets/imgs/telephone/5.png'  
      ]
      },

      {
        name: 'maquillage',
        productID: 1,
        description: 'Voici notre nouvelle gamme de maquillage qui va vous sublimez',
        price: 100000,
        stockAvailable: 10,
        categoryID: 1,
        manufacturer: 'ABC Manufacturer',
        weight: 0.5,
        color: 'Black',
        size: 'M',
        image: [
          'assets/imgs/maquillage/1.jpg', 
          'assets/imgs/maquillage/2.jpg', 
          'assets/imgs/maquillage/3.jpg',
          'assets/imgs/maquillage/4.jpg',
          'assets/imgs/maquillage/5.jpg'  
      ]
      },

      {
        name: 'ps4',
        productID: 1,
        description: 'Venez decoucrir cette serie de ps4, vous ne serez pas decu!',
        price: 100000 ,
        stockAvailable: 10,
        categoryID: 1,
        manufacturer: 'ABC Manufacturer',
        weight: 0.5,
        color: 'Black',
        size: 'M',
        image: [
          'assets/imgs/ps4/1.jpg', 
          'assets/imgs/ps4/2.jpg', 
          'assets/imgs/ps4/3.jpg',
          'assets/imgs/ps4/4.jpg', 
      ]
      },

      {
        name: 'chaussure',
        productID: 1,
        description: 'Venez decouvir toutes ces incroyable chaussures de tres bon prix a des prix abordables',
        price: 100000,
        stockAvailable: 10,
        categoryID: 1,
        manufacturer: 'ABC Manufacturer',
        weight: 0.5,
        color: 'Black',
        size: 'M',
        image: [
          'assets/imgs/chaussure/1.jpeg', 
          'assets/imgs/chaussure/2.jpeg', 
          'assets/imgs/chaussure/3.jpeg',
          'assets/imgs/chaussure/4.jpeg', 
      ]
      } 

    ]
  }

  showCreatePage(){
    this.navCtrl.navigateForward('/enregistrer-produit');
  }
 
  
}