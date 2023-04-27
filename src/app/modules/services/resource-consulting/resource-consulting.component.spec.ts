import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceConsultingComponent } from './resource-consulting.component';

describe('ResourceConsultingComponent', () => {
  let component: ResourceConsultingComponent;
  let fixture: ComponentFixture<ResourceConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
