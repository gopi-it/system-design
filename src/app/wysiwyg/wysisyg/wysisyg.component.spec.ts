import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WysisygComponent } from './wysisyg.component';

describe('WysisygComponent', () => {
  let component: WysisygComponent;
  let fixture: ComponentFixture<WysisygComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WysisygComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WysisygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
