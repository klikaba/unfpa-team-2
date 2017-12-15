import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nontransmittable',
  templateUrl: './nontransmittable.component.html',
  styleUrls: ['./nontransmittable.component.css']
})
export class NontransmittableComponent implements OnInit {
  toDos = [
  {title: "Todo1", content: "aaaa"},
  {title: "Todo2", content: "bbbb"},
  {title: "Todo3", content: "cccc"}
  ];
  
  @ViewChild('para') p1;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	this.p1.nativeElement.innerHTML = "BBBBB";
  }
}
