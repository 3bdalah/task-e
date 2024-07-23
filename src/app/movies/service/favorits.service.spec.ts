import { TestBed } from '@angular/core/testing';

import { FavoritsService } from './favorits.service';

describe('FavoritsService', () => {
  let service: FavoritsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
