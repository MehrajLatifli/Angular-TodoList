import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componentname3Component } from './componentname3.component';

describe('Componentname3Component', () => {
  let component: Componentname3Component;
  let fixture: ComponentFixture<Componentname3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Componentname3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Componentname3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
