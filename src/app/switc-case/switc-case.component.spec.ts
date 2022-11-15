import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitcCaseComponent } from './switc-case.component';

describe('SwitcCaseComponent', () => {
  let component: SwitcCaseComponent;
  let fixture: ComponentFixture<SwitcCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitcCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitcCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
