import { NgModule } from '@angular/core';
import { MfeSharedServiceComponent } from './mfe-shared-service.component';
import { AnchorTagComponent } from './anchor-tag/anchor-tag.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    MfeSharedServiceComponent,
    AnchorTagComponent,
    ButtonComponent,
  ],
  imports: [],
  exports: [MfeSharedServiceComponent, AnchorTagComponent, ButtonComponent],
})
export class MfeSharedServiceModule {}
