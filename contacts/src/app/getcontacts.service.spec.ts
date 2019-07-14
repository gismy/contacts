import { TestBed } from '@angular/core/testing';

import { GetcontactsService } from './getcontacts.service';

describe('GetcontactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetcontactsService = TestBed.get(GetcontactsService);
    expect(service).toBeTruthy();
  });
});
