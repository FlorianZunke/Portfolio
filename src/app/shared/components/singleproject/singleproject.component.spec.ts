import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleprojectComponent } from './singleproject.component';

describe('SingleprojectComponent', () => {
  let component: SingleprojectComponent;
  let fixture: ComponentFixture<SingleprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingleprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
