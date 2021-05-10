import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinventoryComponent } from './bookinventory.component';

describe('BookinventoryComponent', () => {
  let component: BookinventoryComponent;
  let fixture: ComponentFixture<BookinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
