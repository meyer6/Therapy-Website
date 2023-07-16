import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module12MobileComponent } from './module12-mobile.component';

describe('Module12MobileComponent', () => {
  let component: Module12MobileComponent;
  let fixture: ComponentFixture<Module12MobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module12MobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module12MobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
