import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PimessageComponent } from './pimessage.component';

describe('PimessageComponent', () => {
  let component: PimessageComponent;
  let fixture: ComponentFixture<PimessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PimessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PimessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
