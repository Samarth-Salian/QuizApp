import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-quiz-header',
  templateUrl: './quiz-header.component.html',
  styleUrls: ['./quiz-header.component.css']
})
export class QuizHeaderComponent implements OnInit {

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
