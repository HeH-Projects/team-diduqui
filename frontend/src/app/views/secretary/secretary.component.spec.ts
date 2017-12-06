import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryComponent } from './secretary.component';

describe('SecretaryComponent', () => {
  let component: SecretaryComponent;
  let fixture: ComponentFixture<SecretaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
