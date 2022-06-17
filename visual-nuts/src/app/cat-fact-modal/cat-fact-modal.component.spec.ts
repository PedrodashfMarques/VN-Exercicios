import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatFactModalComponent } from './cat-fact-modal.component';

describe('CatFactModalComponent', () => {
  let component: CatFactModalComponent;
  let fixture: ComponentFixture<CatFactModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatFactModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatFactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
