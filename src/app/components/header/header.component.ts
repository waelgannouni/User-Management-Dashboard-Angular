import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  title: string = 'Employees Tracker';
  btnToggle: boolean= true ;
  text: string ="Add";
  constructor() { }

  ngOnInit(): void {}
  toggleAddEmployee(){
    this.btnToggle=!this.btnToggle;
    if(this.btnToggle){
      this.text="Add";
    }else{
      this.text="Close";
    }
  }

}
