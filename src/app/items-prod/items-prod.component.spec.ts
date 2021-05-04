import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsProdComponent } from './items-prod.component';

describe('ItemsProdComponent', () => {
  let component: ItemsProdComponent;
  let fixture: ComponentFixture<ItemsProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
