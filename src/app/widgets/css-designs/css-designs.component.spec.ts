import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssDesignsComponent } from './css-designs.component';

describe('CssDesignsComponent', () => {
  let component: CssDesignsComponent;
  let fixture: ComponentFixture<CssDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CssDesignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CssDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
