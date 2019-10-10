import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtomeasuresComponent } from './protomeasures.component';

describe('ProtomeasuresComponent', () => {
  let component: ProtomeasuresComponent;
  let fixture: ComponentFixture<ProtomeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtomeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtomeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
