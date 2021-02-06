import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-quiz-login',
  templateUrl: './quiz-login.component.html',
  styleUrls: ['./quiz-login.component.css']
})
export class QuizLoginComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
