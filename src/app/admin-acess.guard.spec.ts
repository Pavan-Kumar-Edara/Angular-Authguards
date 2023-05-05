import { TestBed } from '@angular/core/testing';

import { AdminAcessGuard } from './admin-acess.guard';

describe('AdminAcessGuard', () => {
  let guard: AdminAcessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminAcessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
