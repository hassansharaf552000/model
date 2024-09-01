import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prob',
  templateUrl: './prob.component.html',
  styleUrl: './prob.component.css',
})
export class ProbComponent {
  step = 1;
  selectedLocation: string = '';
  selectedHomeType: string = '';

  @Output() prob = new EventEmitter<any>();

  nextStep() {
    if (this.step === 1 && this.selectedLocation) {
      this.step = 2;
    } else if (this.step === 2 && this.selectedHomeType) {
      this.prob.emit({
        selectedLocation: this.selectedLocation,
        selectedHomeType: this.selectedHomeType,
      });
    }
  }
}
