import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-score',
  templateUrl: './quiz-score.component.html',
  styleUrls: ['./quiz-score.component.css']
})
export class QuizScoreComponent implements OnInit {
  percentage: number;
  score:number;
  TotalQuestions:number;
  icon:any;
  constructor() { 
    this.score = 8;
    this.TotalQuestions = 10;
    this.percentage = this.score/this.TotalQuestions * 100;
   }

  ngOnInit(): void {
    if(this.percentage >= 0 && this.percentage <= 33){
      this.icon = "disappointed";
    } else if(this.percentage >= 34 && this.percentage <= 66){
      this.icon = "Good";
    } else {
      this.icon = "../../assets/images/trophy.png";
    }
  }
}
