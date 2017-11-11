import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseDishesComponent } from './browse-dishes.component';

describe('BrowseDishesComponent', () => {
  let component: BrowseDishesComponent;
  let fixture: ComponentFixture<BrowseDishesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseDishesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
