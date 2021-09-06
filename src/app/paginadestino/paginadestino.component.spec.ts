import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadestinoComponent } from './paginadestino.component';

describe('PaginadestinoComponent', () => {
  let component: PaginadestinoComponent;
  let fixture: ComponentFixture<PaginadestinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadestinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginadestinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
