import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerymanagementComponent } from './querymanagement.component';

describe('QuerymanagementComponent', () => {
  let component: QuerymanagementComponent;
  let fixture: ComponentFixture<QuerymanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuerymanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerymanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
