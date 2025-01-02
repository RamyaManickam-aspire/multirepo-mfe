import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-anchor-tag',
  templateUrl: './anchor-tag.component.html',
  styleUrls: ['./anchor-tag.component.css'],
})
export class AnchorTagComponent {
  @Input() url: any = '';
}
