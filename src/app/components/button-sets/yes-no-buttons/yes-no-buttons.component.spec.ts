import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoButtonsComponent } from './yes-no-buttons.component';

describe('YesNoButtonsComponent', () => {
  let component: YesNoButtonsComponent;
  let fixture: ComponentFixture<YesNoButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YesNoButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
