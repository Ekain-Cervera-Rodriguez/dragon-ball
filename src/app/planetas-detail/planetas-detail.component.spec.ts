import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetasDetailComponent } from './planetas-detail.component';

describe('PlanetasDetailComponent', () => {
  let component: PlanetasDetailComponent;
  let fixture: ComponentFixture<PlanetasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetasDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
