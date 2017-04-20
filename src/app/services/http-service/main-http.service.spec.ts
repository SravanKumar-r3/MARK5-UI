import { TestBed, inject } from '@angular/core/testing';

import { MainHttpService } from './main-http.service';

describe('MainHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainHttpService]
    });
  });

  it('should ...', inject([MainHttpService], (service: MainHttpService) => {
    expect(service).toBeTruthy();
  }));
});
