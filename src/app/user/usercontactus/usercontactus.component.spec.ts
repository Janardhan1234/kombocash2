import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercontactusComponent } from './usercontactus.component';

describe('UsercontactusComponent', () => {
  let component: UsercontactusComponent;
  let fixture: ComponentFixture<UsercontactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercontactusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
