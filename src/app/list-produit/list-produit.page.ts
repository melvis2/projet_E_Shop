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
      placeholder: 'Nickname (max 8 characters)',
      attribute: {
        maxlength: 8,
      },
    },

    {
      type: 'number',
      placeholder: 'Age',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself',
    },

  ];
  

  constructor() { }
  

  ngOnInit() {
  }

}
