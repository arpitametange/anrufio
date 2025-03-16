import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireOffshoreFullStackDevelopersComponent } from './hire-offshore-full-stack-developers.component';

describe('HireOffshoreFullStackDevelopersComponent', () => {
  let component: HireOffshoreFullStackDevelopersComponent;
  let fixture: ComponentFixture<HireOffshoreFullStackDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HireOffshoreFullStackDevelopersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireOffshoreFullStackDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
