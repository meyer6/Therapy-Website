import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFiltererComponent } from './module-filterer.component';

describe('ModuleFiltererComponent', () => {
  let component: ModuleFiltererComponent;
  let fixture: ComponentFixture<ModuleFiltererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFiltererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFiltererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
