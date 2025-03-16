import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerativeAiDevelopmentComponent } from './generative-ai-development.component';

describe('GenerativeAiDevelopmentComponent', () => {
  let component: GenerativeAiDevelopmentComponent;
  let fixture: ComponentFixture<GenerativeAiDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenerativeAiDevelopmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerativeAiDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
