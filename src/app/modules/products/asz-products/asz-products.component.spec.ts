import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASZProductsComponent } from './asz-products.component';

describe('ASZProductsComponent', () => {
  let component: ASZProductsComponent;
  let fixture: ComponentFixture<ASZProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASZProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ASZProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
