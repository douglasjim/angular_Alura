import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteBasico2Component } from './teste-basico2.component';

describe('TesteBasico2Component', () => {
  let component: TesteBasico2Component;
  let fixture: ComponentFixture<TesteBasico2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteBasico2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteBasico2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
