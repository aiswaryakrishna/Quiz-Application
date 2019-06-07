import { Component, OnInit, Input } from '@angular/core';
import { questionDataInterface } from 'src/app/config/interfaces';

@Component({
  selector: 'radio-type',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  @Input() questionInfo: questionDataInterface;
  
  constructor() { }

  ngOnInit() {
  }

  trackByFn(index, item) {
    return index
  }
}
