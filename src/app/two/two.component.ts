import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent {

  newSharedData: string = '';
  observableData: string = '';

  constructor(private shared: SharedService) {
    this.newSharedData = this.shared.sharedData;

    // Subscribe to an Observable in our shared service
    this.shared.updatedValue.subscribe({
      next: (value) => this.observableData = value,
      error: (err) => console.log(err),
      complete: () => console.log('I am done...')
    })
  }

  changeData() {
    this.shared.sharedData = 'I am data from Component TWO';
  }

}
