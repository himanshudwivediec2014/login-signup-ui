import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupContainerComponent } from './login-signup-container.component';

describe('LoginSignupContainerComponent', () => {
  let component: LoginSignupContainerComponent;
  let fixture: ComponentFixture<LoginSignupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSignupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
