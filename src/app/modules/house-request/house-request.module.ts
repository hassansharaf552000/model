import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseRequestRoutingModule } from './house-request-routing.module';
import { HouseParentComponent } from './components/house-parent/house-parent.component';
import { SelectionComponent } from './components/selection/selection.component';
import { ProbComponent } from './components/prob/prob.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PreStepComponent } from './components/pre-step/pre-step.component';

@NgModule({
  declarations: [
    HouseParentComponent,
    SelectionComponent,
    ProbComponent,
    SubmissionComponent,
    PreStepComponent,
  ],
  imports: [
    CommonModule,
    HouseRequestRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HouseRequestModule {}
