import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  score: number;

  constructor(private http: HttpClient) { 
      this.score = 0;
  }

  getQuestionData(topic) {
    return this.http.get('./assets/'+topic+'.json');
  }

  storeQuestionInfoInLocalStorage(questionData) {
    localStorage.setItem('questionData', JSON.stringify(questionData));
  }

  storeScoreInfoInLocalStorage(scoreInfo) {
    localStorage.setItem('scoreInfo', JSON.stringify(scoreInfo));
  }

  getQuestionInfoFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questionData'));
  }

  getScoreInfoFromLocalStorage() {
    return JSON.parse(localStorage.getItem('scoreInfo'));
  }

  getResults(questionData) {
    this.score = 0;
    questionData.forEach(element => {
        if(element.type == "text" && element.answer.toLowerCase() === element.userResponse.toLowerCase()) {
          this.score += 1;
        } else if(element.userResponse && element.type == "checkbox" && element.answer.sort().toString() === element.userResponse.sort().toString()) {
          this.score += 1;
        } else if(element.type == "radio" && element.answer === element.userResponse) {
          this.score += 1;
        }
    });
    return this.score;
  }
}
