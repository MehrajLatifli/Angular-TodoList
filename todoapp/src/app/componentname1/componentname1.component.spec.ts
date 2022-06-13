import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentname1Component } from './componentname1.component';

describe('Componentname1Component', () => {
  let component: Componentname1Component;
  let fixture: ComponentFixture<Componentname1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componentname1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentname1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
