import { TestBed } from '@angular/core/testing';

import { SurfbrakesService } from './surfbrakes.service';

describe('SurfbrakesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SurfbrakesService = TestBed.get(SurfbrakesService);
    expect(service).toBeTruthy();
  });
});
