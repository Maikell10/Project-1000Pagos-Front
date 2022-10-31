import { TestBed } from '@angular/core/testing';

import { ApiExteriorService } from './api-exterior.service';

describe('ApiExteriorService', () => {
  let service: ApiExteriorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiExteriorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
