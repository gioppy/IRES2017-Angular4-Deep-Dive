import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMediaRightComponent } from './media-right.component';

describe('BulmaMediaRightComponent', () => {
  let component: BulmaMediaRightComponent;
  let fixture: ComponentFixture<BulmaMediaRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaMediaRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMediaRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
