import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1aComponent } from './module1a.component';

describe('Module1aComponent', () => {
  let component: Module1aComponent;
  let fixture: ComponentFixture<Module1aComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module1aComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module1aComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
