import { Component, OnInit } from '@angular/core';
import { QuestionTypesService } from './question-types.service';

@Component({
  selector: 'app-question-types',
  templateUrl: './question-types.component.html',
  styleUrls: ['./question-types.component.css']
})
export class QuestionTypesComponent implements OnInit {
  listQuestionTypes: {title: string, description: string}[];

  constructor(private questionTypesService: QuestionTypesService) { }

  ngOnInit(): void {
    this.listQuestionTypes = this.questionTypesService.questionTypes;
  }

  onCreate(index: number) {
    console.log(this.questionTypesService.questionTypes[index]);
  }

}
