import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenSearchComponent } from './examen-search.component';

describe('ExamenSearchComponent', () => {
  let component: ExamenSearchComponent;
  let fixture: ComponentFixture<ExamenSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
