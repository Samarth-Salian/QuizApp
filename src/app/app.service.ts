import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) { }
  public getQuestionAndAnswer(){
    return this.httpClient.get(`assets/mock/questionsNAnswers.json`);
  }
  getAppName(){
    return "Quiz App";
  }
  
}
