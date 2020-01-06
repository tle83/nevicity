import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  private projectData = require("../../assets/data/projectInfo.json");
  constructor() {}

  ngOnInit() {
    console.log(this.projectData);
  }
}
