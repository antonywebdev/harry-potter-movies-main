import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDisplayComponent } from './movie-display.component';

describe('MovieBoardComponent', () => {
  let component: MovieDisplayComponent;
  let fixture: ComponentFixture<MovieDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieDisplayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
