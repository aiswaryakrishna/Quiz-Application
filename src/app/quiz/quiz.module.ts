import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TopicsComponent } from './topics/topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: TopicsComponent },
  { path: 'angular', component: QuestionsComponent },
  { path: 'angular/:id', component: QuestionsComponent },
  { path: 'js', component: QuestionsComponent },
  { path: 'js/:id', component: QuestionsComponent },
  { path: 'html', component: QuestionsComponent },
  { path: 'html/:id', component: QuestionsComponent }]

@NgModule({
  declarations: [QuestionsComponent, TopicsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    QuestionsComponent
  ]
})
export class QuizModule { 

  constructor() {
  }
 }
