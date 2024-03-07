import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent {

  constructor(public shared: SharedService) {}

  changeData() {
    setTimeout(() => {
      this.shared.sharedData = 'I am data from Component ONE';

      this.shared.updateData('Updated by Component One')
    }, 2000);
  }
}
