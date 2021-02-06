import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-quiz-container',
  templateUrl: './quiz-container.component.html',
  styleUrls: ['./quiz-container.component.css']
})
export class  QuizContainerComponent implements OnInit {
  timeLeft: number = 10;
  progressbarValue:number;
  interval: any;
  questionLength :number;
  questionNumber: number;
  constructor() {
    this.questionNumber = 1;
    this.questionLength = 10;
    this.progressbarValue = 10;
   }

  ngOnInit(): void {
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
  nextQuestion () {
    this.timeLeft = 10;
    this.questionNumber++;
    this.progressbarValue = this.progressbarValue + 10;
  }

}
