import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Question } from '../quiz-model/Quiz-Model';


@Component({
  selector: 'app-quiz-display',
  templateUrl: './quiz-display.component.html',
  styleUrls: ['./quiz-display.component.css']
})
export class QuizDisplayComponent implements OnInit {


  @Input('quizData')
  question: Question;

  constructor() { 
    this.question = {};
  }

  ngOnInit(): void {
    
  }

}
