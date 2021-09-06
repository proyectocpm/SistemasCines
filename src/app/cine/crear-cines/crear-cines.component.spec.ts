import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCinesComponent } from './crear-cines.component';

describe('CrearCinesComponent', () => {
  let component: CrearCinesComponent;
  let fixture: ComponentFixture<CrearCinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
