import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  @Input() dataFromParent!: string;

  @Output() sendToParent = new EventEmitter<string>();

  sendData() {
    this.sendToParent.emit('I am data from Child Component')
  }
}
