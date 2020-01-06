import { Component, OnInit } from "@angular/core";
import { Project } from '../models/data';

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  private projectData : Project; 
  constructor() {}

  ngOnInit() {
    this.projectData = require("../../assets/data/projectInfo.json");
    console.log(this.projectData);
  }
}
