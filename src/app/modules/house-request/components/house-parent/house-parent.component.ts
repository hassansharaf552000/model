import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-house-parent',
  templateUrl: './house-parent.component.html',
  styleUrl: './house-parent.component.css',
})
export class HouseParentComponent {
  step: number = 1;
  houseData: any = {};

  handlePreStep(event: any) {
    console.log('PreStep data:', event);
    this.houseData = { ...this.houseData, ...event };
    this.step = 2;
  }

  handleProb(event: any) {
    console.log('Prob data:', event);
    this.houseData = { ...this.houseData, ...event };
    this.step = 3;
  }

  handleSelection(event: any) {
    console.log('Selection data:', event);
    this.houseData = { ...this.houseData, ...event };
    this.step = 4;
  }

  handleSubmission(event: any) {
    console.log('Submission data:', event);
    this.houseData = { ...this.houseData, ...event };
    this.step = 5;
  }
}
