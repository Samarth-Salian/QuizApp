import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../quiz-model/quiz.model';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.component.html',
  styleUrls: ['./quiz-question.component.css']
})
export class QuizQuestionComponent implements OnInit {
  
  @Input('quizData')
  question: Question;

  constructor() { 
    this.question = {};
  }

  ngOnInit(): void {
  }

}
