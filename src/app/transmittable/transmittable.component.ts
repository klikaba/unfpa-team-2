import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transmittable',
  templateUrl: './transmittable.component.html',
  styleUrls: ['./transmittable.component.css']
})
export class TransmittableComponent implements OnInit, AfterViewInit {
	
	@ViewChild('para') p1;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	this.p1.nativeElement.innerHTML = "AAAAA";
  }
}
