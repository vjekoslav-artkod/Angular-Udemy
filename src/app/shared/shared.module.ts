import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from 'src/components/loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './dropdown.directive';

@NgModule({
  declarations: [AlertComponent, SpinnerComponent, DropdownDirective],
  imports: [CommonModule],
  exports: [AlertComponent, SpinnerComponent, DropdownDirective, CommonModule],
})
export class SharedModule {}
