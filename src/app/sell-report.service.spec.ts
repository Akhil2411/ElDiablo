import { TestBed } from '@angular/core/testing';

import { SellReportService } from './sell-report.service';

describe('SellReportService', () => {
  let service: SellReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
