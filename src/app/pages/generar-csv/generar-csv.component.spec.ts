import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarCsvComponent } from './generar-csv.component';

describe('GenerarCsvComponent', () => {
  let component: GenerarCsvComponent;
  let fixture: ComponentFixture<GenerarCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarCsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerarCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
