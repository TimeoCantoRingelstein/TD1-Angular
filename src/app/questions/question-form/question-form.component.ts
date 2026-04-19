import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {

  @Input()
  quiz! : Quiz;

  public questionForm!: FormGroup;

  constructor(public formBuilder : FormBuilder) {
    this.initializeQuestionForm();
  }

  initializeQuestionForm() {
    this.questionForm = this.formBuilder.group({
      label: [''],
      answers: this.formBuilder.array([])
    })
  }

  get answers() {
    return this.questionForm.get('answers') as FormArray;
  }

  ngOnInit(): void {
  }

  private createAnswer() {
    return this.formBuilder.group({
      value: '',
      isCorrect: false
    })
  }

  addAnswer() {
    this.answers.push(this.createAnswer());
    console.log('Adding an answer field');
  }

}
