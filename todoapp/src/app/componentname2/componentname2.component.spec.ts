import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentname2Component } from './componentname2.component';

describe('Componentname2Component', () => {
  let component: Componentname2Component;
  let fixture: ComponentFixture<Componentname2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componentname2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentname2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
