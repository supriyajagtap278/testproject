import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileModuleComponent } from './profile-module.component';

describe('ProfileModuleComponent', () => {
  let component: ProfileModuleComponent;
  let fixture: ComponentFixture<ProfileModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
