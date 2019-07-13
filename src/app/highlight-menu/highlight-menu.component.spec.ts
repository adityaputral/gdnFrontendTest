import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightMenuComponent } from './highlight-menu.component';

describe('HighlightMenuComponent', () => {
  let component: HighlightMenuComponent;
  let fixture: ComponentFixture<HighlightMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighlightMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
