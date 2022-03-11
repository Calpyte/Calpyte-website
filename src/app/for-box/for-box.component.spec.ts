import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForBoxComponent } from './for-box.component';

describe('ForBoxComponent', () => {
  let component: ForBoxComponent;
  let fixture: ComponentFixture<ForBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
