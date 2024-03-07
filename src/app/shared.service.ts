import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private incomingData = new BehaviorSubject<string>('Initial Value');
  // Component Two will subscribe to this "updatedValue"
  updatedValue = this.incomingData.asObservable();

  sharedData: string = 'I am Data From A Service'


  // This method will be called by Component One "To update data"
  updateData(data:string) {
    this.incomingData.next(data)
  }
}
