import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { QuizLoginComponent } from './quiz-login/quiz-login.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
  import { from } from 'rxjs';
const routes: Routes = [  
  {
    path:"",
    component: QuizLoginComponent
  },
  {
    path:"start",
    component: QuizStartComponent
  },
  {
    path:"score",
    component: QuizScoreComponent
  },
  {
    path:"container",
    component: QuizContainerComponent
  },
  {
    path:"result",
    component:QuizResultComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
