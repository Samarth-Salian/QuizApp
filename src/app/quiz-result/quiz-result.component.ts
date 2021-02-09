import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Question } from  '../quiz-model/quiz.model';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  questionNAnswer: Question[] = [];
  constructor(private appService:AppService) {    
    this.appService.getQuestionAndAnswer().subscribe((data)=>{
      this.questionNAnswer = data.questions;
    });
   }  
    ngOnInit(): void {
    
  }

}
