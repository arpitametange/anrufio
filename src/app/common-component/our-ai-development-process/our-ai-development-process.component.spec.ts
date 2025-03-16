import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAiDevelopmentProcessComponent } from './our-ai-development-process.component';

describe('OurAiDevelopmentProcessComponent', () => {
  let component: OurAiDevelopmentProcessComponent;
  let fixture: ComponentFixture<OurAiDevelopmentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurAiDevelopmentProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurAiDevelopmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
