import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonEditComponent } from './boton-edit.component';

describe('BotonEditComponent', () => {
  let component: BotonEditComponent;
  let fixture: ComponentFixture<BotonEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
