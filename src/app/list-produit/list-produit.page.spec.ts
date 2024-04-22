import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListProduitPage } from './list-produit.page';

describe('ListProduitPage', () => {
  let component: ListProduitPage;
  let fixture: ComponentFixture<ListProduitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
