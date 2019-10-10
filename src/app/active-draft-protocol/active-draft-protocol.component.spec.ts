import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDraftProtocolComponent } from './active-draft-protocol.component';

describe('ActiveDraftProtocolComponent', () => {
  let component: ActiveDraftProtocolComponent;
  let fixture: ComponentFixture<ActiveDraftProtocolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveDraftProtocolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDraftProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
