import { TestBed, inject } from '@angular/core/testing';

import { PreorderService } from './preorder.service';

describe('PreorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreorderService]
    });
  });

  it('should be created', inject([PreorderService], (service: PreorderService) => {
    expect(service).toBeTruthy();
  }));
});
