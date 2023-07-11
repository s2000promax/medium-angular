import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { TopBarComponent } from './components/topBar/topBar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
