import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCatFactsComponent } from './random-cat-facts.component';

describe('RandomCatFactsComponent', () => {
  let component: RandomCatFactsComponent;
  let fixture: ComponentFixture<RandomCatFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomCatFactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCatFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
