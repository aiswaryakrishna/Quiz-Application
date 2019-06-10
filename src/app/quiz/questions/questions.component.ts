import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { questionDataInterface, scoreInfoInterface } from '../../config/interfaces';

@Component({
  selector: 'app-quiz',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public questionData: Array<questionDataInterface> = [];
  counter: number;
  question: string;
  options: Array<string> = [];
  answer: number;
  mark: number;
  routerUrl: string;
  submitValue: boolean;
  scoreInfo: scoreInfoInterface;

  constructor(private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.snapshot.params['id'] ? this.counter = (+this.route.snapshot.params['id']) - 1 : this.counter = 0;
    this.routerUrl = route.snapshot.url[0].path;
  }

  ngOnInit() {
    this.getQuizData();
  }

  getQuizData() {
    this.scoreInfo = this.quizService.getScoreInfoFromLocalStorage();
    if(this.quizService.getScoreInfoFromLocalStorage()) {
      this.submitValue = this.scoreInfo.submitValue;
      this.mark = this.scoreInfo.score;
    } else {
      this.questionData = this.quizService.getQuestionInfoFromLocalStorage();
      if (!this.questionData) {
        this.quizService.getTopicwiseQuestions(this.router.url).subscribe((data: Array<questionDataInterface>) => {
          this.questionData = data;
          this.quizService.storeQuestionInfoInLocalStorage(data);
        });
      }
    }
  }

  onNext() {
    this.counter += 1;
    this.quizService.storeQuestionInfoInLocalStorage(this.questionData);
    let id = this.counter + 1;
    this.router.navigate([this.routerUrl + '/' + id]);
  }

  onPrevious() {
    this.counter -= 1;
    let id = this.counter + 1;
    this.router.navigate([this.routerUrl + '/' + id]);
  }

  onSubmit() {
    this.quizService.storeQuestionInfoInLocalStorage(this.questionData);
    this.mark = this.quizService.getResults(this.questionData);
    this.submitValue = true;
    window.localStorage.clear();
    this.counter += 1;
    this.quizService.storeScoreInfoInLocalStorage({submitValue:this.submitValue, score: this.mark});
  }
}
