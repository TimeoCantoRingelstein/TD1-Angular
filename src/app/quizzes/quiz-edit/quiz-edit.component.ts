import {Component, OnInit} from "@angular/core";
import {Quiz} from "../../../models/quiz.model";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../../../services/quiz.service";

@Component({
  selector: 'app-quiz-edit',
  templateUrl: './quiz-edit.component.html',
  styleUrls: ['./quiz-edit.component.scss']
})
export class QuizEditComponent implements OnInit {

  public quiz : Quiz | undefined;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') ;
    this.quizService.quizzes$.subscribe( (quizzes) => this.quiz = quizzes.find( aQuiz => aQuiz.id === id) )
  }
}
