import { TestBed } from '@angular/core/testing';

import { MfeSharedService } from './mfe-shared.service';

describe('MfeSharedService', () => {
  let service: MfeSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MfeSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
