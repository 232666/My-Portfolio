import { TestBed } from '@angular/core/testing';

import { HeaderIndexService } from './header-index.service';

describe('HeaderIndexService', () => {
  let service: HeaderIndexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderIndexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
