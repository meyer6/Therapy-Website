import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2bComponent } from './module2b.component';

describe('Module2bComponent', () => {
  let component: Module2bComponent;
  let fixture: ComponentFixture<Module2bComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module2bComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
