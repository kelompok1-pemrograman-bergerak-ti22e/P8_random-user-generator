import { TestBed } from '@angular/core/testing';

import { RandomUserGenerator } from './random-user-generator.service';

describe('RandomUserGenerator', () => {
  let service: RandomUserGenerator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomUserGenerator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
