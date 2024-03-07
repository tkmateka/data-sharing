import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  parentData:string = 'Incoming from Parent';
  childData: string = '';

  acceptDataFromChild(dataFromChild:string) {
    this.childData = dataFromChild;
  }

}
