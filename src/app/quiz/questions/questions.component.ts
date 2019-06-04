import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Router, ActivatedRoute } from '@angular/router';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';

@Component({
  selector: 'app-quiz',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public questionData: Array<any> = [];
  counter: number;
  question: string;
  options: Array<any> = [];
  answer: number;
  mark: number;
  routerUrl: string;
  submitValue: boolean;

  constructor(private quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router) {
      this.route.snapshot.params['id'] ? this.counter = (+this.route.snapshot.params['id']) - 1 : this.counter = 0;
      this.routerUrl = route.snapshot.url[0].path;
  }

  ngOnInit() {
    this.questionData = this.quizService.getData();
    if (!this.questionData) {
      this.quizService.getTopicwiseQuestions(this.router.url).subscribe((data: Array<any>) => {
        this.questionData = data;
        this.quizService.storeData(data);
      });
    }
  }

  onNext() {
    this.counter += 1;
    this.quizService.storeData(this.questionData);
    let id = this.counter + 1;
    this.router.navigate([this.routerUrl + '/' + id]);
  }

  onPrevious() {
    this.counter -= 1;
  }

  onSubmit() {
    this.mark = this.questionData.filter(item => item.userResponse === item.answer).length;
    this.submitValue = true;
    window.localStorage.clear();
  }
}
