import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTeaserComponent } from './customer-teaser.component';

describe('CustomerTeaserComponent', () => {
  let component: CustomerTeaserComponent;
  let fixture: ComponentFixture<CustomerTeaserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTeaserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
