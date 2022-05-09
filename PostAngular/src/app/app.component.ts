import { Component } from '@angular/core';
import {AuthorizationService} from "./services/authorization.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: AuthorizationService, private router: Router) {
  }

  token = localStorage.getItem('accessToken')
  role = localStorage.getItem('role')

  logOff() {
    this.service.logout()
    this.reloadPage()
  }

  reloadPage() {
    setTimeout(()=>{

      window.location.reload();
    }, 50);
    this.router.navigate(['/login'])
  }

}
