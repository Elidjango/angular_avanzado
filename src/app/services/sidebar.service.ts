import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  nav: any[] = [
    {
      title: "dashboard",
      icon: "mdi-action-dashboard",
      url: "/",
      subnav: []
    },
    {
      title: "Elements",
      icon: "mdi-action-view-week",
      url: "",
      subnav: [
        {title: "Progress bar", url: "/progressbar"},
        {title: "Charts", url: "/charts"},
      ]
    }
  ]

  constructor() { }
}
