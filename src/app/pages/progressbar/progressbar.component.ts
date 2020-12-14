import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styles: [
  ]
})
export class ProgressbarComponent {
  progress: number = 0;

  minusProgress() {
    if (this.progress === 0) {
      return false;
    } else {
      this.progress--;
    }
  }

  plusProgress() {
    if (this.progress === 100) {
      return false;
    } else {
      this.progress++;
    }
  }
}
