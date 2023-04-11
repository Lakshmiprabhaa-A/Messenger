import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchnavbarComponent } from './searchnavbar.component';

describe('SearchnavbarComponent', () => {
  let component: SearchnavbarComponent;
  let fixture: ComponentFixture<SearchnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
