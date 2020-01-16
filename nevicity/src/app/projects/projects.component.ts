import { Component, OnInit } from "@angular/core";
import { Project } from "../models/data.js";
import projects from "../../assets/data/projectInfo.json";
import { MatDialog } from "@angular/material";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit {
  private projectData: Project[];
  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.projectData = projects;
  }

  goToCode(repoURL) {
    if (/^http[s]?:\/\//.test(repoURL)) {
      window.open(repoURL, "_blank");
    } else {
      repoURL = `https://${repoURL}`;
      window.open(repoURL, "_blank");
    }
  }

  openPopup(template) {
    this.dialog.open(template, {
      width: "90%",
      height: "90%"
    });
  }
}
