import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailprodukPage } from './detailproduk.page';

describe('DetailprodukPage', () => {
  let component: DetailprodukPage;
  let fixture: ComponentFixture<DetailprodukPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailprodukPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
