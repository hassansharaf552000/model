import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pre-step',
  templateUrl: './pre-step.component.html',
  styleUrl: './pre-step.component.css',
})
export class PreStepComponent {
  @Output() preStep = new EventEmitter<any>();

  selectedOption: string = '';
  projectName: string = '';

  startProcess() {
    if (this.selectedOption && this.projectName) {
      this.preStep.emit({
        selectedOption: this.selectedOption,
        projectName: this.projectName,
      });
    }
  }
}
