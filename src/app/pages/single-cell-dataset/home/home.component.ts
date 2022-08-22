import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  button_value= false;

  SetDBTValue(value:any){
    if (value=='dbt') {
    this.button_value= true;
    }
    else if(value=='smod'){
      this.button_value=false;
    }
    console.log(this.button_value);
  }

}
