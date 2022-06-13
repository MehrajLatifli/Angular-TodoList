import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentname4Component } from './componentname4.component';

describe('Componentname4Component', () => {
  let component: Componentname4Component;
  let fixture: ComponentFixture<Componentname4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componentname4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentname4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
