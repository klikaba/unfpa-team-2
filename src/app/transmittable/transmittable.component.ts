import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-transmittable',
  templateUrl: './transmittable.component.html',
  styleUrls: ['./transmittable.component.css']
})
export class TransmittableComponent implements OnInit {
	
  name = '';
  elementToShow = { title: "", content: "" };

  toDos = [
  {title: "AAAA", content: "xxXX"},
  {title: "bbbb", content: "baaabbb"},
  {title: "cccc", content: "cccwwwwc"}
  ];

  constructor() { }

  ngOnInit() {
    for(let element of this.toDos){
      if(element.title == this.name){
        this.elementToShow = element;
      }
    }
  }

  myEvent(event){
  for(let element of this.toDos){
      if(element.title == event){
        this.elementToShow = element;
      }
    }
  }
}
