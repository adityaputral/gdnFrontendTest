import { TestBed } from '@angular/core/testing';

import { HighlightMenuService } from './highlight-menu.service';

describe('HighlightMenuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighlightMenuService = TestBed.get(HighlightMenuService);
    expect(service).toBeTruthy();
  });
});
