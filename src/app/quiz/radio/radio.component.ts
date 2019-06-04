import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'radio-type',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() questionInfo: any;
  
  constructor() { }

  ngOnInit() {
  }

}
