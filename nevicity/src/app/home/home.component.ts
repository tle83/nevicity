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
  isNavClicked: boolean;
  homePanel = ["1", "2"];
  tilePanel = ["1", "2", "4"];
  constructor(private router: Router) {}

  ngOnInit() {
    this.isFrogClicked = false;
    this.isHomeHover = false;
    this.aboutData = about;
    this.isNavClicked = false;

    this.title = this.aboutData.title.split("*");
    this.description = this.aboutData.description.split("*");
    console.log(this.title, "\n", this.description);
  }

  mouseOver(event) {
    const isHomeImage = event.target.src.includes("pink-frog");
    if (isHomeImage == true) {
      // this.isNavClicked = !this.isNavClicked;
      this.isFrogClicked = !this.isFrogClicked;
      this.isHomeHover = !this.isHomeHover;
    }
    if (this.isNavClicked === true) {
      this.isNavClicked = false;
    }
    console.log(
      `isFrogClicked: ${this.isFrogClicked}\nisHomeHover: ${this.isHomeHover}\nisNavClicked: ${this.isNavClicked}`
    );
  }

  navigateTo(location) {
    console.log("GO TO: ", location);
    switch (location) {
      case "home":
        this.isNavClicked = false;
        this.isFrogClicked = !this.isFrogClicked;
        this.isHomeHover = false;
        // this.router.navigate(["/home"]);
        break;
      case "projects":
        this.isNavClicked = true;
        // this.router.navigate(["/projects"]);
        break;
      case "about":
        this.isNavClicked = true;
        // this.router.navigate(["/about"]);
        break;
      case "links":
        this.isNavClicked = true;
        // this.router.navigate(["/links"]);
        break;
      default:
        break;
    }
    console.log(
      `isFrogClicked: ${this.isFrogClicked}\nisHomeHover: ${this.isHomeHover}\nisNavClicked: ${this.isNavClicked}`
    );
  }
}
