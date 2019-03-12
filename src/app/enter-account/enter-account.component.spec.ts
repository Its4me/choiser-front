import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterAccountComponent } from './enter-account.component';

describe('EnterAccountComponent', () => {
  let component: EnterAccountComponent;
  let fixture: ComponentFixture<EnterAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
