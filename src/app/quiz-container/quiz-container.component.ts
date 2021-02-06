import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz, Question } from './../quiz-model/quiz-model';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent implements OnInit {
  quizQuestions: Question[] = [];
  currentQuestionIndex = 0;
  currentQuestion: Question = {};
  timeLeft: number = 10;
  progressbarValue:number;
  interval: any;
  questionLength :number;
  questionNumber: number;
  constructor(private http: HttpClient) {
    this.questionNumber = 1;
    this.questionLength = 10;
    this.progressbarValue = 10;
   }
  ngOnInit(): void {
    this.http.get<Quiz>('assets/mock/questionsNOptions.json').subscribe((data) => {
      this.quizQuestions = data.questions
      this.nextQuestion();
    });
  }
  nextQuestion() {
    this.currentQuestion = this.quizQuestions[this.currentQuestionIndex];
    this.currentQuestionIndex++;
  }
  startTimer() {
  this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }
    },1000)
  }
  ngAfterViewInit(){
    this.startTimer();
  }
  nextQuestion1 () {
    this.timeLeft = 10;
    this.questionNumber++;
    this.progressbarValue = this.progressbarValue + 10;
  }
}
