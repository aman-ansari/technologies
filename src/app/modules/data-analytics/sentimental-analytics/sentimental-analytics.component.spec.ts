import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentalAnalyticsComponent } from './sentimental-analytics.component';

describe('SentimentalAnalyticsComponent', () => {
  let component: SentimentalAnalyticsComponent;
  let fixture: ComponentFixture<SentimentalAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentimentalAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentimentalAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
