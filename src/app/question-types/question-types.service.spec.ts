import { TestBed } from '@angular/core/testing';

import { QuestionTypesService } from './question-types.service';

describe('QuestionTypesService', () => {
  let service: QuestionTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
