import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesCommandesSouhaiterComponent } from './listes-commandes-souhaiter.component';

describe('ListesCommandesSouhaiterComponent', () => {
  let component: ListesCommandesSouhaiterComponent;
  let fixture: ComponentFixture<ListesCommandesSouhaiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListesCommandesSouhaiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListesCommandesSouhaiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
