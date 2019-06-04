import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'checkbox-type',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() questionInfo: any;
  itemArray: Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  onSelect(value) {
    this.itemArray.push(value);
    this.questionInfo.userResponse = this.itemArray;
    // this.questionInfo.userResponse = JSON.stringify(this.questionInfo.userResponse);
  }
}
