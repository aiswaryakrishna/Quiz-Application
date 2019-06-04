import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TopicsComponent } from './topics/topics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputTextComponent } from './input-text/input-text.component';

const routes: Routes = [
  { path: '', component: TopicsComponent },
  { path: 'angular', component: QuestionsComponent },
  { path: 'angular/:id', component: QuestionsComponent },
  { path: 'js', component: QuestionsComponent },
  { path: 'js/:id', component: QuestionsComponent },
  { path: 'html', component: QuestionsComponent },
  { path: 'html/:id', component: QuestionsComponent },
  { path: '**', component: TopicsComponent}]

@NgModule({
  declarations: [QuestionsComponent, TopicsComponent, RadioComponent, CheckboxComponent, InputTextComponent],
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
