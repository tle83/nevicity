import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private homeImage = require("../../assets/img/pink-frog.gif");
  isHomeHover: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isHomeHover = false;
  }

  mouseOver(event) {
    const isHomeImage = event.target.src.includes("pink-frog");
    if (isHomeImage == true) {
      this.isHomeHover = !this.isHomeHover;
    }
  }

  navigateTo(location) {
    console.log("GO TO: ", location);
    switch (location) {
      case "home":
        this.router.navigate(["/home"]);
        break;
      case "projects":
        this.router.navigate(["/projects"]);
        break;
      case "about":
        this.router.navigate(["/about"]);
        break;
      case "links":
        this.router.navigate(["/links"]);
        break;
      default:
        break;
    }
  }
}
