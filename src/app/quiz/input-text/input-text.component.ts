import { Component, OnInit, Input } from '@angular/core';
import { questionDataInterface } from 'src/app/config/interfaces';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() questionInfo: questionDataInterface;

  constructor() { }

  ngOnInit() {
  }

}
