import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEngineeringServicesComponent } from './product-engineering-services.component';

describe('ProductEngineeringServicesComponent', () => {
  let component: ProductEngineeringServicesComponent;
  let fixture: ComponentFixture<ProductEngineeringServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEngineeringServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEngineeringServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
