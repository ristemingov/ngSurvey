import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTypesComponent } from './question-types.component';

describe('QuestionTypesComponent', () => {
  let component: QuestionTypesComponent;
  let fixture: ComponentFixture<QuestionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
