import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nontransmittable',
  templateUrl: './nontransmittable.component.html',
  styleUrls: ['./nontransmittable.component.css']
})
export class NontransmittableComponent implements OnInit {

  @ViewChild('para') p1;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	this.p1.nativeElement.innerHTML = "BBBBB";
  }
}
