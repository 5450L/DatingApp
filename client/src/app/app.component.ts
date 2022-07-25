import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: any;

  constructor(private http:HttpClient){
    setTheme('bs4'); // or 'bs4'
  }
   
  ngOnInit() {
    
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:5001/api/users').subscribe({

      next: response => this.users = response,
      error: error =>console.log(error)

    });
  }
}