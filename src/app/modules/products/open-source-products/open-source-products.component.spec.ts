import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenSourceProductsComponent } from './open-source-products.component';

describe('OpenSourceProductsComponent', () => {
  let component: OpenSourceProductsComponent;
  let fixture: ComponentFixture<OpenSourceProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenSourceProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenSourceProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
