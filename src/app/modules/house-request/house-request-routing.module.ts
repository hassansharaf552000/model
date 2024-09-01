import { ProbComponent } from './components/prob/prob.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseParentComponent } from './components/house-parent/house-parent.component';
import { SelectionComponent } from './components/selection/selection.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { PreStepComponent } from './components/pre-step/pre-step.component';

const routes: Routes = [
  { path: 'house', component: HouseParentComponent },
  { path: 'pre-step', component: PreStepComponent },
  { path: 'prob', component: ProbComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'submission', component: SubmissionComponent },
  { path: '', redirectTo: 'house', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseRequestRoutingModule {}
