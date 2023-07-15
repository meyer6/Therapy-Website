import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2aComponent } from './module2a.component';

describe('Module2aComponent', () => {
  let component: Module2aComponent;
  let fixture: ComponentFixture<Module2aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module2aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
