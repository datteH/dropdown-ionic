import { TestBed } from '@angular/core/testing';
import { SelectModalService } from './select-modal.service';

describe('SelectModalService', () => {
  let service: SelectModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectModalService);
  });

  it('...', () => {
    expect(service).toBeTruthy();
  });
});
