import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'museum-ticket-shop-angular';
  page = '';
  routes: Array<string> = [];
  loggedInUser?: firebase.default.User | null;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.routes = this.router.config.map(conf => conf.path) as string[];

    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((events: any) => {
        const currPage = (events.urlAfterRedirects as string).split('/')[1] as string;
        if (this.routes.includes(currPage)) {
          this.page = currPage;
        }
    });

    this.authService.getloggedInUser().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('currentUser', JSON.stringify(this.loggedInUser));
    }, error => {
      localStorage.setItem('currentUser', JSON.stringify('null'));
    });
  }

  navigate(currentPage: string) {
    this.router.navigateByUrl(currentPage);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) {
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.authService.logout();
  }
}
