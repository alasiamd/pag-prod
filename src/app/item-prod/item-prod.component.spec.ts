import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemProdComponent } from './item-prod.component';

describe('ItemProdComponent', () => {
  let component: ItemProdComponent;
  let fixture: ComponentFixture<ItemProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
