import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NombreFechaComponent } from './nombre-fecha.component';

describe('NombreFechaComponent', () => {
  let component: NombreFechaComponent;
  let fixture: ComponentFixture<NombreFechaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NombreFechaComponent]
    });
    fixture = TestBed.createComponent(NombreFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
