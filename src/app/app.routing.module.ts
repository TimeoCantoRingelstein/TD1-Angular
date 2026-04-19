import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {QuizListComponent} from "./quizzes/quiz-list/quiz-list.component";
import {QuizEditComponent} from "./quizzes/quiz-edit/quiz-edit.component";

const routes: Routes = [
  {path : "quiz-list", component : QuizListComponent },
  {path : "quiz-edit", component : QuizEditComponent },
  {path : "", redirectTo: '/quiz-list', pathMatch: 'full' },
]

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule {

}
