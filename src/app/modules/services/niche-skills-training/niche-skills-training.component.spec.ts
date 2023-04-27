import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicheSkillsTrainingComponent } from './niche-skills-training.component';

describe('NicheSkillsTrainingComponent', () => {
  let component: NicheSkillsTrainingComponent;
  let fixture: ComponentFixture<NicheSkillsTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicheSkillsTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicheSkillsTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
