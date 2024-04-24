import { Attribute, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.page.html',
  styleUrls: ['./list-produit.page.scss'],
})
export class ListProduitPage implements OnInit {
  public alertButtons = ['OK'];
  public alertInputs = [

    {
      placeholder: 'Name',
    },
    {
      type: 'text area',
      placeholder: 'Description',
    },
    {
      type: 'number',
      placeholder: 'Price',
    },
    {
      placeholder: 'Nickname (max 8 characters)',
      attribute: {
        maxlength: 8,
      },
    },

    {
      type: 'number',
      placeholder: 'Stock disponible',
    },
    {
      placeholder: 'Categorie',
    },

    {
      type: 'number',
      placeholoder: 'Weight',
    },

    {
      placeholder: 'couleur',
    },

    
  ];
  

  constructor() { }
  

  ngOnInit() {
  }

}
