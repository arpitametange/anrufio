import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedExpertiseComponent } from './dedicated-expertise.component';

describe('DedicatedExpertiseComponent', () => {
  let component: DedicatedExpertiseComponent;
  let fixture: ComponentFixture<DedicatedExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DedicatedExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DedicatedExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
