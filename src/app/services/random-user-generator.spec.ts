import { TestBed } from '@angular/core/testing';

import { RandomUserGeneratorService } from './random-user-generator.service';

describe('RandomUserGenerator', () => {
  let service: RandomUserGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUserGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
