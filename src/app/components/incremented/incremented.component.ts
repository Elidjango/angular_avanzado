import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incremented',
  templateUrl: './incremented.component.html',
  styles: [
  ]
})
export class IncrementedComponent {
  @Input("value") progress: number = 0;
  @Input() btnClass: string = "black";

  @Output() valueOut: EventEmitter<number> = new EventEmitter();

  minusProgress() {
    if (this.progress === 0) {
      return false;
    } else {
      this.valueOut.emit(this.progress--);
      this.progress--;
    }
  }

  plusProgress() {
    if (this.progress === 100) {
      return false;
    } else {
      this.valueOut.emit(this.progress++);
      this.progress++;
    }
  }

  onChange(value: number) {
    if (String(value).length >= 3) {
      this.progress = 100;
      return this.valueOut.emit(this.progress);
    } else {
      if (value >= 100) {
        this.progress = 100;
      } else if (value <= 0) {
        this.progress = 0;
      } else {
        this.progress = value;
      }
      
      this.valueOut.emit(this.progress);
    }

  }
}
