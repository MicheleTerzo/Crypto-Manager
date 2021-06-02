import { TestBed } from '@angular/core/testing';

import { RecordsDataService } from './records-data.service';

describe('RecordsDataService', () => {
  let service: RecordsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
