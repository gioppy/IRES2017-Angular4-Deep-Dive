import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulmaMediaLeftComponent } from './media-left.component';

describe('BulmaMediaLeftComponent', () => {
  let component: BulmaMediaLeftComponent;
  let fixture: ComponentFixture<BulmaMediaLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulmaMediaLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulmaMediaLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
