import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMediaContentComponent } from './media-content.component';

describe('BulmaMediaContentComponent', () => {
  let component: BulmaMediaContentComponent;
  let fixture: ComponentFixture<BulmaMediaContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaMediaContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMediaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
