import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBillsComponent } from './print-bills.component';

describe('PrintBillsComponent', () => {
  let component: PrintBillsComponent;
  let fixture: ComponentFixture<PrintBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
