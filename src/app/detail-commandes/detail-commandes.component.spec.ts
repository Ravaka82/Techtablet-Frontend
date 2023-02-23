import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCommandesComponent } from './detail-commandes.component';

describe('DetailCommandesComponent', () => {
  let component: DetailCommandesComponent;
  let fixture: ComponentFixture<DetailCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCommandesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
