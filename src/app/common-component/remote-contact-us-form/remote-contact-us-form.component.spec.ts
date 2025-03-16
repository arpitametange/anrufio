import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteContactUsFormComponent } from './remote-contact-us-form.component';

describe('RemoteContactUsFormComponent', () => {
  let component: RemoteContactUsFormComponent;
  let fixture: ComponentFixture<RemoteContactUsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoteContactUsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoteContactUsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
