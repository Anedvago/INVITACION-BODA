import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaInvitadosComponent } from './tabla-invitados.component';

describe('TablaInvitadosComponent', () => {
  let component: TablaInvitadosComponent;
  let fixture: ComponentFixture<TablaInvitadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaInvitadosComponent]
    });
    fixture = TestBed.createComponent(TablaInvitadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
