import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { markDirty } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  mark: number;
  responseArray:Array<any> = [];

  constructor(private http: HttpClient) { 
      this.mark = 0;
  }

  getTopicwiseQuestions(routerUrl) {
    let fileName: String;
    if (routerUrl.includes('/angular')) {
      fileName = "angularSampleData.json";
    } else if (routerUrl.includes('/js')) {
      fileName = "js.json";
    } else {
      fileName = "html.json";
    }
    return this.http.get('./assets/'+fileName);
  }

  storeData(questionData) {
    localStorage.setItem('questionData', JSON.stringify(questionData));
  }

  getData() {
    return JSON.parse(localStorage.getItem('questionData'));
    console.log(localStorage.getItem('questionData'));
  }
}
