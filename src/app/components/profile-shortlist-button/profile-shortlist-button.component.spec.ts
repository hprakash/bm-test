import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileShortlistButtonComponent } from './profile-shortlist-button.component';

describe('ProfileShortlistButtonComponent', () => {
  let component: ProfileShortlistButtonComponent;
  let fixture: ComponentFixture<ProfileShortlistButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileShortlistButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileShortlistButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
