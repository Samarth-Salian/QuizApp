import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Quiz, Question } from  './../quiz-model/quiz-model';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  questionNAnswer:Object;

  constructor(private appService:AppService) {
    this.questionNAnswer = {};
    this.appService.getQuestionAndAnswer().subscribe((data)=>{
      console.log(data);
      this.questionNAnswer = data;
    });
   }
  
    ngOnInit(): void {
    
  }

}
