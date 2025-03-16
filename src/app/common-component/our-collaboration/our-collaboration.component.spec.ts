import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCollaborationComponent } from './our-collaboration.component';

describe('OurCollaborationComponent', () => {
  let component: OurCollaborationComponent;
  let fixture: ComponentFixture<OurCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCollaborationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
