import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';

const routes: Routes = [
  {
    path:'start',
    component: QuizStartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
