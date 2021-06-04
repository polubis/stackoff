import { Component, OnInit } from "@angular/core";

import { min } from "@stackoff/validation";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log(min(2)(2));
  }
}
