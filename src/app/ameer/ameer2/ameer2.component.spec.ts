import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ameer2Component } from './ameer2.component';

describe('Ameer2Component', () => {
  let component: Ameer2Component;
  let fixture: ComponentFixture<Ameer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ameer2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ameer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
