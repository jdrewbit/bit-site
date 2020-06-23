import { Component, OnInit } from '@angular/core';
import { NavItem } from '../nav-item';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navItems: NavItem[] = [
    {'link': 'home', 'class': 'app-nav-link'},
    {'link': 'bio', 'class': 'app-nav-link'},
    {'link': 'projects', 'class': 'app-nav-link'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
