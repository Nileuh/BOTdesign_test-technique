import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePokemonsComponent } from './liste-pokemons.component';

describe('ListePokemonsComponent', () => {
  let component: ListePokemonsComponent;
  let fixture: ComponentFixture<ListePokemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePokemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
