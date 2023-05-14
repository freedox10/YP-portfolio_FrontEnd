import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit{
  
  isLogged = false;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['/login'])
  }

  onLogOut(){
    this.router.navigate(['/'])
  }

  in(){
    this.isLogged = true;
  }

  out(){
    this.isLogged = false;
  }
}
