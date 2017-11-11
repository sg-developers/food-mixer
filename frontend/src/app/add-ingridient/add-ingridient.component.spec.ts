import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngridientComponent } from './add-ingridient.component';

describe('AddIngridientComponent', () => {
  let component: AddIngridientComponent;
  let fixture: ComponentFixture<AddIngridientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIngridientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngridientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
