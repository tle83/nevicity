import { Component, OnInit } from "@angular/core"; 

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private homeImage = require("../../assets/img/pink-frog.gif");
  isHomeHover: boolean;

  constructor() {}

  ngOnInit() {
    this.isHomeHover = true;
  }

  mouseOver(event) {
    // const isHomeImage = event.target.src.includes("pink-frog");
    // if (isHomeImage == true) {
    //   this.isHomeHover = !this.isHomeHover;
    // }
  }
}
