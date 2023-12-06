import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {
 @Input() menuStatus: boolean = false;
  menu = [
    { id: 1, name: 'Dashboard', icon: 'fa-solid fa-gauge' },
    { id: 2, name: 'Products', icon: 'fas fa-shopping-cart' },
    { id: 3, name: 'Orders', icon: 'fas fa-file-invoice-dollar' },
    { id: 4, name: 'Components', icon: 'far fa-gem' },
    { id: 5, name: 'Charts', icon: 'fas fa-chart-line' },
    { id: 6, name: 'Maps', icon: 'fas fa-globe' },
    { id: 7, name: 'Documentation', icon: 'fas fa-book' },
    { id: 8, name: 'Calendar', icon: 'fas fa-calendar' },
    { id: 9, name: 'Examples', icon: 'fas fa-folder' },
  ];


  ngOnInit() {

  }





}
