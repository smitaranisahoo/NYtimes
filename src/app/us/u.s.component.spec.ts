import { ComponentFixture, TestBed } from '@angular/core/testing';

import { U.SComponent } from './u.s.component';

describe('U.SComponent', () => {
  let component: U.SComponent;
  let fixture: ComponentFixture<U.SComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ U.SComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(U.SComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
