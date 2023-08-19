import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaciadorComponent } from './espaciador.component';

describe('EspaciadorComponent', () => {
  let component: EspaciadorComponent;
  let fixture: ComponentFixture<EspaciadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaciadorComponent]
    });
    fixture = TestBed.createComponent(EspaciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
