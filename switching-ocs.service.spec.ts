import { TestBed } from '@angular/core/testing';

import { SwitchingOcsService } from './switching-ocs.service';

describe('SwitchingOcsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwitchingOcsService = TestBed.get(SwitchingOcsService);
    expect(service).toBeTruthy();
  });
});
