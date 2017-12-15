import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nontransmittable',
  templateUrl: './nontransmittable.component.html',
  styleUrls: ['./nontransmittable.component.css']
})
export class NontransmittableComponent implements OnInit {

  name = '';
  elementToShow = { title: "", content: "" };

  toDos = [
  {title: "Todo1", content: "aaaa"},
  {title: "Todo2", content: "bbbb"},
  {title: "Todo3", content: "cccc"}
  ];
  
  constructor() { }

  ngOnInit() {
    for(let element of this.toDos){
      if(element.title == this.name){
        this.elementToShow = element;
      }
    }
  }

  showNonTransmittable(event){
    for(let element of this.toDos){
      if(element.title == event){
        this.elementToShow = element;
      }
    }
  }

}
