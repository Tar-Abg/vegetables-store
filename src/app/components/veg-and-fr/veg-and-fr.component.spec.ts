import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegAndFrComponent } from './veg-and-fr.component';

describe('VegAndFrComponent', () => {
  let component: VegAndFrComponent;
  let fixture: ComponentFixture<VegAndFrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegAndFrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegAndFrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
