import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeServiceComponent } from './scope-service.component';

describe('ScopeServiceComponent', () => {
  let component: ScopeServiceComponent;
  let fixture: ComponentFixture<ScopeServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScopeServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScopeServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
