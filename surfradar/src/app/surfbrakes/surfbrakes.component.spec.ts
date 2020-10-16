import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfbrakesComponent } from './surfbrakes.component';

describe('SurfbrakesComponent', () => {
  let component: SurfbrakesComponent;
  let fixture: ComponentFixture<SurfbrakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfbrakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfbrakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
