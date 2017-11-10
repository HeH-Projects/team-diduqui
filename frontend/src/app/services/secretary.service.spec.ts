import { TestBed, inject } from '@angular/core/testing';

import { SecretaryService } from './secretary.service';

describe('SecretaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SecretaryService]
    });
  });

  it('should be created', inject([SecretaryService], (service: SecretaryService) => {
    expect(service).toBeTruthy();
  }));
});
