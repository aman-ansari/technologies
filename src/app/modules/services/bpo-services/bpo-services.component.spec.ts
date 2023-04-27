import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpoServicesComponent } from './bpo-services.component';

describe('BpoServicesComponent', () => {
  let component: BpoServicesComponent;
  let fixture: ComponentFixture<BpoServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpoServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BpoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
