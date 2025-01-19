import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceCardComponent } from './reference-card.component';

describe('ReferenceCardComponent', () => {
  let component: ReferenceCardComponent;
  let fixture: ComponentFixture<ReferenceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReferenceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReferenceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
