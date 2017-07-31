import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMediaComponent } from './digital-media.component';

describe('DigitalMediaComponent', () => {
  let component: DigitalMediaComponent;
  let fixture: ComponentFixture<DigitalMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
