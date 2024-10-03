import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaircutsComponent } from './haircuts.component';

describe('HaircutsComponent', () => {
  let component: HaircutsComponent;
  let fixture: ComponentFixture<HaircutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HaircutsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HaircutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
