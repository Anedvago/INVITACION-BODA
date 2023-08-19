import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoVersiculoComponent } from './foto-versiculo.component';

describe('FotoVersiculoComponent', () => {
  let component: FotoVersiculoComponent;
  let fixture: ComponentFixture<FotoVersiculoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoVersiculoComponent]
    });
    fixture = TestBed.createComponent(FotoVersiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
