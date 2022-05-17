import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/single-cell-dataset/home/home.component';
import {DebugComponent } from './pages/ide/debug/debug.component';
import { LoadStepsComponent } from './pages/common/load-steps/load-steps.component';
import { ImputationComponent } from './pages/evaluator/imputation/imputation.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard/leaderboard.component';
import { SubmitCodeComponent } from './pages/ide/submit-code/submit-code.component';
import { TasksComponent } from './pages/ide/tasks/tasks.component';
import { ExportBatchComponent } from './pages/ide/export-batch/export-batch.component';
import { ExportDockerComponent } from './pages/ide/export-docker/export-docker.component';
import { SubmitDataComponent } from './pages/single-cell-dataset/submit-data/submit-data.component';
import { DataByTasksComponent } from './pages/single-cell-dataset/data-by-tasks/data-by-tasks.component';
import { EvaluatorMainComponent } from './pages/evaluator/evaluator-main/evaluator-main.component';
import { IdeMainComponent } from './pages/ide/ide-main/ide-main.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'ide', component: IdeMainComponent },
  { path: 'dataloader', component: LoadStepsComponent },
  { path: 'evaluator', component: EvaluatorMainComponent},
  { path: 'leaderboard', component: LeaderboardComponent},
  //{ path: 'ide/own_code', component: SubmitCodeComponent},
  //{path: 'ide/tasks', component: TasksComponent},
  //{path: 'ide/exportbatch', component: ExportBatchComponent},
  //{ path: 'ide/exportdocker', component: ExportDockerComponent},
  {path: 'single-cell-dataset/submit_data', component: SubmitDataComponent},
  {path:'single-cell-dataset/data_by_tasks', component: DataByTasksComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
