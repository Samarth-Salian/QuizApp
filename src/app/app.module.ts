import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizLoginComponent } from './quiz-login/quiz-login.component';
import { QuizStartComponent } from './quiz-start/quiz-start.component';
import { QuizDisplayComponent } from './quiz-display/quiz-display.component';
import { QuizScoreComponent } from './quiz-score/quiz-score.component';
import { QuizResultComponent } from './quiz-result/quiz-result.component';
import { QuizHeaderComponent } from './quiz-header/quiz-header.component';
import { QuizContainerComponent } from './quiz-container/quiz-container.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    QuizLoginComponent,
    QuizStartComponent,
    QuizDisplayComponent,
    QuizScoreComponent,
    QuizResultComponent,
    QuizHeaderComponent,
    QuizContainerComponent,
    QuizQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
