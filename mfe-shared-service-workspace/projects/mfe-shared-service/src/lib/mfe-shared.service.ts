import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MfeSharedService {
  // Shared data using BehaviorSubject
  private sharedData = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedData.asObservable();

  // Method to update the shared data
  setData(data: any) {
    this.sharedData.next(data);
  }

  // Method to retrieve the current shared data
  getData() {
    return this.sharedData.getValue();
  }
}
