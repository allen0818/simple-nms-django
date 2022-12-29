import { TestBed } from '@angular/core/testing';

import { NetconfService } from './netconf.service';

describe('NetconfService', () => {
  let service: NetconfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetconfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
