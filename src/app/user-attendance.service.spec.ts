import { TestBed } from '@angular/core/testing';

import { UserAttendanceService } from './user-attendance.service';

describe('UserAttendanceService', () => {
  let service: UserAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
