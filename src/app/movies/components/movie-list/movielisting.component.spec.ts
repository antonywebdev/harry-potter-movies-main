import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistingComponent } from './movielisting.component';

describe('MovieComponent', () => {
  let component: MovielistingComponent;
  let fixture: ComponentFixture<MovielistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovielistingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
