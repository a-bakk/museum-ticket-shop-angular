import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() currPage: string = '';

  @Input() loggedInUser?: firebase.default.User | null;

  // called by app component
  @Output() currentPage: EventEmitter<string> = new EventEmitter();

  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();

  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  close(logout?: boolean) {
    this.onCloseSidenav.emit(true);
    if (logout === true) {
      this.onLogout.emit(logout);
    }
  }

}
