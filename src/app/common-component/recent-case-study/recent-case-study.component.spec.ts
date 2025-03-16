import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentCaseStudyComponent } from './recent-case-study.component';

describe('RecentCaseStudyComponent', () => {
  let component: RecentCaseStudyComponent;
  let fixture: ComponentFixture<RecentCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentCaseStudyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
