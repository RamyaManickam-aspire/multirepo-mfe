import { Component } from '@angular/core';
import { MfeSharedService } from 'mfe-shared-service';

@Component({
  selector: 'app-products-suggested',
  templateUrl: './products-suggested.component.html',
  styleUrls: ['./products-suggested.component.css'],
})
export class ProductsSuggestedComponent {
  receivedData: string = '';

  constructor(private sharedService: MfeSharedService) {}

  ngOnInit() {
    this.sharedService.sharedData$.subscribe((data) => {
      this.receivedData = data;
    });
  }
}
