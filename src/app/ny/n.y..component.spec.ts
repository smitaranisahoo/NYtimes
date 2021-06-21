import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N.Y.Component } from './n.y..component';

describe('N.Y.Component', () => {
  let component: N.Y.Component;
  let fixture: ComponentFixture<N.Y.Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N.Y.Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N.Y.Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
