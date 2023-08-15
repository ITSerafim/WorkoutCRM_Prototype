import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public items: MenuItem[];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Профиль',
        icon: 'pi pi-info',
        command: () => {
          this.router.navigate(['/profile']);
        },
      },
      { label: 'Выйти', icon: 'pi pi-sign-out' },
    ];
  }
}
