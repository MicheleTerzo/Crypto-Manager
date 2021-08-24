import { TestBed } from '@angular/core/testing';

import { ProfileAuthInterceptor } from './profile-auth.interceptor';

describe('ProfileAuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ProfileAuthInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ProfileAuthInterceptor = TestBed.inject(ProfileAuthInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
