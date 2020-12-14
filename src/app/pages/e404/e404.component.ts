import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.components.css']
})
export class E404Component implements OnInit {

  constructor(
    public location: Location,
  ) {}

  ngOnInit(): void {}

  GetRouter() {
    const titlee = this.location.prepareExternalUrl(this.location.path());
    const _t = titlee.replace("#/", "");

    return _t;
  }
}
