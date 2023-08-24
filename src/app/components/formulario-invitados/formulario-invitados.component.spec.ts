import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioInvitadosComponent } from './formulario-invitados.component';

describe('FormularioInvitadosComponent', () => {
  let component: FormularioInvitadosComponent;
  let fixture: ComponentFixture<FormularioInvitadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioInvitadosComponent]
    });
    fixture = TestBed.createComponent(FormularioInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
