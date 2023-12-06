import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css"
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarButton = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  ngOnInit() {}
  toggleSidebar() {
    this.menuStatus = !this.menuStatus;
    this.toggleSidebarButton.emit(this.menuStatus);
  }
}
