import { TestBed, inject } from '@angular/core/testing';

import { TranferService } from './tranfer.service';

describe('TranferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranferService]
    });
  });

  it('should be created', inject([TranferService], (service: TranferService) => {
    expect(service).toBeTruthy();
  }));
});
