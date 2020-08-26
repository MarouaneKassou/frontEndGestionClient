import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-app';
  connect=false;
  isConnect = false;

  constructor(){

  }

  ngOnInit(){ 
     
      if(localStorage.getItem('nom') !== "")
      {
        this.connect = true;
        this.isConnect = true;
      }
      
      
  }
 

}
