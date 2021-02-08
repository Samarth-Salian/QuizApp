import { Component, OnInit, ViewChild, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question, Quiz } from '../quiz-model/quiz.model';
import {Router} from '@angular/router';

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
  constructor(private http: HttpClient,private router: Router) {
    this.questionNumber = 0;
    this.progressbarValue = 10;
    this.questionLength = 0;
   }

  ngOnInit(): void {
    this.http.get<Quiz>('assets/mock/questionsNOptions.json').subscribe((data) => {
      this.quizQuestions = data.questions
      this.questionLength = this.quizQuestions.length;
      this.nextQuestion(event);
    });
  }

  nextQuestion(event:any) {
    this.questionNumber++;
    if(this.questionNumber > this.quizQuestions.length){
      this.router.navigateByUrl('/score');
    }
    this.currentQuestion = this.quizQuestions[this.currentQuestionIndex];
    this.currentQuestionIndex++;
    this.timeLeft = 10;
    if(this.questionNumber === 10){
      event.target.innerText = "Save";
    }
  }
  startTimer() {
  this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      }else if(this.questionNumber < this.quizQuestions.length){
        this.nextQuestion(event);
      }
    },1000)
  }
  ngAfterViewInit(){
    this.startTimer();
  }
}
