import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EverythingYouNeedComponent } from './everything-you-need.component';

describe('EverythingYouNeedComponent', () => {
  let component: EverythingYouNeedComponent;
  let fixture: ComponentFixture<EverythingYouNeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EverythingYouNeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EverythingYouNeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
