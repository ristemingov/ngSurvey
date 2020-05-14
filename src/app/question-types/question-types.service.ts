import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionTypesService {
  questionTypes: {title: string, description: string}[] = [
    {title: 'Open-ended questions', description: 'An open-ended question is a question that cannot be answered with a "yes" or "no" response, or with a static response. Open-ended questions are phrased as a statement which requires a response. The response can be compared to information that is already known to the questioner'},
    {title: 'Closed-ended questions', description: 'A closed-ended question refers to any question for which a researcher provides research participants with options from which to choose a response. Closed-ended questions are sometimes phrased as a statement which requires a response.'},
    {title: 'Rating questions', description: 'A rating questions survey is a set of categories designed to elicit information about a quantitative or a qualitative attribute. In the social sciences, particularly psychology. '},
    {title: 'Likert scale questions', description: 'The Likert scale is a five (or seven) point scale which is used to allow the individual to express how much they agree or disagree with a particular statement. Likert scales can measure variations such as frequency, quality, importance, and likelihood, etc.'},
    {title: 'Multiple choice questions', description: 'Multiple choice is a form of an objective assessment in which respondents are asked to select only correct answers from the choices offered as a list. The multiple choice format is most frequently used in educational testing, in market research, and in elections, when a person chooses between multiple candidates, parties, or policies.'},
    {title: 'Picture choice questions', description: 'Picture choice is a form of an objective assessment in which respondents are asked to select only correct answers from the choices offered as a list of pictures. The picture choice format is most frequently used in educational testing, in market research, and in brand awarness.'},
    {title: 'Demographic questions', description: 'The Demographic Surveys is responsible for collecting and disseminating accurate, nationally representative data on health and population in countries.'},
    {title: 'Hybrid questions', description: 'Hybrid questions type survey is a survey that can have multiple types of questions.'}
  ];

  constructor() { }


}
