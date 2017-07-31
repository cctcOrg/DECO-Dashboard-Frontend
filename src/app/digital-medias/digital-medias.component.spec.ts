import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMediasComponent } from './digital-medias.component';

describe('DigitalMediasComponent', () => {
  let component: DigitalMediasComponent;
  let fixture: ComponentFixture<DigitalMediasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalMediasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
