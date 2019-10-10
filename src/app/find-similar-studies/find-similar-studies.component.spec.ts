import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSimilarStudiesComponent } from './find-similar-studies.component';

describe('FindSimilarStudiesComponent', () => {
  let component: FindSimilarStudiesComponent;
  let fixture: ComponentFixture<FindSimilarStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSimilarStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSimilarStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
