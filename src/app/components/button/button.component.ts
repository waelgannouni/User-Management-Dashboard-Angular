import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input () text: string;
  @Input () background_color: string;
  @Input () text_color:string;
  @Output () btnClick= new EventEmitter();
  constructor() { }

  ngOnInit() {}
  OnClick(){
    this.btnClick.emit();
  }

}
