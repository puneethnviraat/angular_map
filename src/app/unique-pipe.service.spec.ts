import { TestBed } from '@angular/core/testing';

import { UniquePipeService } from './unique-pipe.service';

describe('UniquePipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniquePipeService = TestBed.get(UniquePipeService);
    expect(service).toBeTruthy();
  });
});
