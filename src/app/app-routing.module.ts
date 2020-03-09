
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrialComponent } from './trial/trial.component';

const routes: Routes = [
  { path: '', component: TrialComponent },
  { path: 'trial', component: TrialComponent },
  { path: '**', redirectTo: 'trial'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
