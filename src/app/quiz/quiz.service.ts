import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { markDirty } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  mark: number;

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
  }

  getResults(questionData) {
    this.mark = 0;
    questionData.forEach(element => {
        if(element.type == "text" && element.answer === element.userResponse.toLowerCase()) {
          this.mark += 1;
        } else if(element.userResponse && element.type == "checkbox" && element.answer.toString() === element.userResponse.sort().toString()) {
          this.mark += 1;
        } else if(element.answer === element.userResponse) {
          this.mark += 1;
        }
    });
    return this.mark;
  }
}
