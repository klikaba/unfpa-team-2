/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransmittableComponent } from './transmittable.component';

describe('TransmittableComponent', () => {
  let component: TransmittableComponent;
  let fixture: ComponentFixture<TransmittableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransmittableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmittableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
