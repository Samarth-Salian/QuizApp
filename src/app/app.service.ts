import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  getAppName(){
    return "Quiz App";
  }
  constructor() { }
}
