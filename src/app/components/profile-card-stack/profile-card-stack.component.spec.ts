import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCardStackComponent } from './profile-card-stack.component';

describe('ProfileCardStackComponent', () => {
  let component: ProfileCardStackComponent;
  let fixture: ComponentFixture<ProfileCardStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCardStackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
