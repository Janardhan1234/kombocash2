import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserborrowingComponent } from './userborrowing.component';

describe('UserborrowingComponent', () => {
  let component: UserborrowingComponent;
  let fixture: ComponentFixture<UserborrowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserborrowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserborrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
