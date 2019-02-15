import { TestBed, inject } from '@angular/core/testing';

import { MycustomerAppService } from './mycustomerApp.service';

describe('MycustomerAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MycustomerAppService]
    });
  });

  it('should be created', inject([MycustomerAppService], (service: MycustomerAppService) => {
    expect(service).toBeTruthy();
  }));
});
