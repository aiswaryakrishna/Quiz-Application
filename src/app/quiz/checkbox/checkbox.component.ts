import { Component, OnInit, Input } from '@angular/core';
import { questionDataInterface } from 'src/app/config/interfaces';

@Component({
  selector: 'checkbox-type',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() questionInfo: questionDataInterface;
  itemArray: Array<number> = [];

  constructor() { }

  ngOnInit() {
  }

  onSelect(value) {
    if(this.itemArray.includes(value)) {
      this.itemArray.splice(this.itemArray.indexOf(value), 1);
    } else {
      this.itemArray.push(value);
    }
    this.questionInfo.userResponse = this.itemArray;
  }

  trackByFn(index, item) {
    return index
  }
}
