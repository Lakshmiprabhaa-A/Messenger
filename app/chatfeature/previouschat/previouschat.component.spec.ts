import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviouschatComponent } from './previouschat.component';

describe('PreviouschatComponent', () => {
  let component: PreviouschatComponent;
  let fixture: ComponentFixture<PreviouschatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviouschatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviouschatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
