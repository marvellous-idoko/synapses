import { TestBed, inject } from '@angular/core/testing';

import { MaxPostServiceService } from './max-post-service.service';

describe('MaxPostServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MaxPostServiceService]
    });
  });

  it('should be created', inject([MaxPostServiceService], (service: MaxPostServiceService) => {
    expect(service).toBeTruthy();
  }));
});
