import {Component, OnInit} from '@angular/core';
import {sidebarRouterLinks} from "./utils/sidebar-router-links";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public links = sidebarRouterLinks;

  constructor() {
  }

  ngOnInit(): void {
  }

}
