import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectModalPage } from './select-modal.page';

describe('SelectModalPage', () => {
  let component: SelectModalPage;
  let fixture: ComponentFixture<SelectModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
