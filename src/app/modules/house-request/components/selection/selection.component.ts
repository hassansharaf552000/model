import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.css',
})
export class SelectionComponent {
  step = 1;
  shortDescription: string = '';
  detailedDescription: string = '';
  designName: string = '';
  messagePreview: string = '';

  @Output() selection = new EventEmitter<any>();

  nextStep() {
    if (this.step === 1 && this.shortDescription && this.detailedDescription) {
      this.messagePreview = `${this.shortDescription}\n\n${this.detailedDescription}`;
      this.step = 2;
    } else if (this.step === 2 && this.designName) {
      this.selection.emit({
        shortDescription: this.shortDescription,
        detailedDescription: this.detailedDescription,
        designName: this.designName,
      });
    }
  }

  submitForm() {
    if (this.designName) {
      this.selection.emit({
        shortDescription: this.shortDescription,
        detailedDescription: this.detailedDescription,
        designName: this.designName,
      });
    }
  }
}
