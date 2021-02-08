import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz-model/quiz.model';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) { }
  public getQuestionAndAnswer(){
    return this.httpClient.get<Quiz>(`assets/mock/questionsNAnswers.json`);
  }
  getAppName(){
    return "Quiz App";
  }
  
}
