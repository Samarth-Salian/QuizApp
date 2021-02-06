import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question, Quiz } from '../quiz-model/quiz.model';


@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class QuizContainerComponent implements OnInit {

  quizQuestions: Question[]=[]

  currentQuestionIndex = 0;

  currentQuestion: Question = {};

  constructor(private http: HttpClient) { }

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



}
