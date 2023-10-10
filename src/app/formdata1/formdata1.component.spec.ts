import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdata1Component } from './formdata1.component';

describe('Formdata1Component', () => {
  let component: Formdata1Component;
  let fixture: ComponentFixture<Formdata1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Formdata1Component]
    });
    fixture = TestBed.createComponent(Formdata1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
