import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css',
})
export class SubmissionComponent implements OnInit {
  @Output() submission = new EventEmitter<void>();

  sending: boolean = true;
  success: boolean = false;
  progress: number = 0;

  ngOnInit(): void {
    this.startSending();
  }

  startSending(): void {
    const interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.sending = false;
        this.success = true;
        this.submission.emit();
      }
    }, 1000);
  }
  exit(): void {
    console.log('Exiting...');
  }
}
