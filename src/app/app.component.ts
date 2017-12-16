import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	elementToShow = { title: "", content: "" };

  illnesses = [
  {title: "AAAA", content: "xxXX"},
  {title: "bbbb", content: "baaabbb"},
  {title: "cccc", content: "cccwwwwc"}
  ];

  constructor() { }

  ngOnInit() {
    this.elementToShow = this.illnesses[0];
  }

  myEvent(event, data){
  console.log(event.path[1].className);
  for(let element of this.illnesses){
      if(element.title == data){
        this.elementToShow = element;
      }
    }
  }
}
