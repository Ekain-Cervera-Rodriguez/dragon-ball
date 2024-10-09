import { TestBed } from '@angular/core/testing';

import { CharactersDetailService } from './characters-detail.service';

describe('CharactersDetailService', () => {
  let service: CharactersDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
