import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeerComponent } from './ameer.component';

describe('AmeerComponent', () => {
  let component: AmeerComponent;
  let fixture: ComponentFixture<AmeerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmeerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
