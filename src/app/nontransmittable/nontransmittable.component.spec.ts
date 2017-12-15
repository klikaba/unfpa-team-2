/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NontransmittableComponent } from './nontransmittable.component';

describe('NontransmittableComponent', () => {
  let component: NontransmittableComponent;
  let fixture: ComponentFixture<NontransmittableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NontransmittableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NontransmittableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
