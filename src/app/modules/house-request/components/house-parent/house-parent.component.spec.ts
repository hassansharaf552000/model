import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseParentComponent } from './house-parent.component';

describe('HouseParentComponent', () => {
  let component: HouseParentComponent;
  let fixture: ComponentFixture<HouseParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
