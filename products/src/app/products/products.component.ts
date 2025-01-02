import { Component, Input } from '@angular/core';
import { MfeSharedService } from 'mfe-shared-service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  data: string = '';
  constructor(private sharedService: MfeSharedService) {}
  buttonText = 'Click Me';
  @Input() content: string = 'Default Button Text';
  sendData() {
    this.sharedService.setData('Message from mfe1');
  }
}
