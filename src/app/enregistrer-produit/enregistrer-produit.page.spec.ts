import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnregistrerProduitPage } from './enregistrer-produit.page';

describe('EnregistrerProduitPage', () => {
  let component: EnregistrerProduitPage;
  let fixture: ComponentFixture<EnregistrerProduitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EnregistrerProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
