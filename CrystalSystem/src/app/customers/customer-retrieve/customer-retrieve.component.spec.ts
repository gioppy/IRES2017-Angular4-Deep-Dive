import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRetrieveComponent } from './customer-retrieve.component';

describe('CustomerRetrieveComponent', () => {
  let component: CustomerRetrieveComponent;
  let fixture: ComponentFixture<CustomerRetrieveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRetrieveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
