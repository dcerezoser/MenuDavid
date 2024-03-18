import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOfDayComponent } from './menu-of-day.component';

describe('MenuOfDayComponent', () => {
  let component: MenuOfDayComponent;
  let fixture: ComponentFixture<MenuOfDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuOfDayComponent]
    });
    fixture = TestBed.createComponent(MenuOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
