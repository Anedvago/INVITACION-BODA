import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLocationComponent } from './button-location.component';

describe('ButtonLocationComponent', () => {
  let component: ButtonLocationComponent;
  let fixture: ComponentFixture<ButtonLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonLocationComponent]
    });
    fixture = TestBed.createComponent(ButtonLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
