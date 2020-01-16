import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import about from "../../assets/data/aboutInfo.json";
import { About } from "../models/data.js";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private homeImage = "../../assets/img/pink-frog.gif";
  private aboutData: About;
  isFrogClicked: boolean;
  isHomeHover: boolean;
  title = [];
  description = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.isFrogClicked = true;
    this.isHomeHover = false;
    this.aboutData = about;

    this.title = this.aboutData.title.split('*');
    this.description = this.aboutData.description.split('*');
    console.log(this.title, '\n', this.description);
  }

  mouseOver(event) {
    const isHomeImage = event.target.src.includes("pink-frog");
    if (isHomeImage == true) {
      this.isFrogClicked = !this.isFrogClicked;
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
