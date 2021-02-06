import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizLoginComponent } from './quiz-login/quiz-login.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';
const routes: Routes = [  
  {
    path:"",
    component: QuizLoginComponent
  },{
    path:"quiz-start",
    component: QuizStartComponent
  },
  {
    path:"quiz-score",
    component: QuizScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
