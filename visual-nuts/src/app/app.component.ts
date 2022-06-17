import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private myRouter: Router){}

  ngOnInit(): void {
    this.myRouter.navigate(['breeds']);
  }
  title = 'visual-nuts';
}
