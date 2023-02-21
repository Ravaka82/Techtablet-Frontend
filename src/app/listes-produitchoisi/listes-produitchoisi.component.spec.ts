import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesProduitchoisiComponent } from './listes-produitchoisi.component';

describe('ListesProduitchoisiComponent', () => {
  let component: ListesProduitchoisiComponent;
  let fixture: ComponentFixture<ListesProduitchoisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesProduitchoisiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesProduitchoisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
