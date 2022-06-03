import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './pages/single-cell-dataset/home/home.component';
import { LoadStepsComponent } from './pages/common/load-steps/load-steps.component';
import { ClusteringComponent } from './pages/evaluator/clustering/clustering.component'; 
import { ImputationComponent } from './pages/evaluator/imputation/imputation.component';
import { ReportComponent } from './pages/evaluator/report/report.component';
import { DebugComponent } from './pages/ide/debug/debug.component';
import { ExportBatchComponent } from './pages/ide/export-batch/export-batch.component';
import { ExportDockerComponent } from './pages/ide/export-docker/export-docker.component';
import { TasksComponent } from './pages/ide/tasks/tasks.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard/leaderboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { ToolbarComponent } from './pages/common/toolbar/toolbar.component';
import { SubmitCodeComponent } from './pages/ide/submit-code/submit-code.component';
import {MatMenuModule} from '@angular/material/menu';
import { SubmitDataComponent } from './pages/single-cell-dataset/submit-data/submit-data.component';
import { DataByTasksComponent } from './pages/single-cell-dataset/data-by-tasks/data-by-tasks.component';
import { EvaluatorMainComponent } from './pages/evaluator/evaluator-main/evaluator-main.component';
import {MatTabsModule} from '@angular/material/tabs';
import { IdeMainComponent } from './pages/ide/ide-main/ide-main.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoadStepsComponent,
    ClusteringComponent,
    ImputationComponent,
    ReportComponent,
    DebugComponent,
    ExportBatchComponent,
    ExportDockerComponent,
    TasksComponent,
    LeaderboardComponent,
    ToolbarComponent,
    SubmitCodeComponent,
    SubmitDataComponent,
    DataByTasksComponent,
    EvaluatorMainComponent,
    IdeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    ClipboardModule,
    MatIconModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
