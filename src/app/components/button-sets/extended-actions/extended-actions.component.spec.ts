import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedActionsComponent } from './extended-actions.component';

describe('ExtendedActionsComponent', () => {
  let component: ExtendedActionsComponent;
  let fixture: ComponentFixture<ExtendedActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
