import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input() questionInfo: any;

  constructor() { }

  ngOnInit() {
  }

}
