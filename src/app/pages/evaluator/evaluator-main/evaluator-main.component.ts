import { Component, OnInit } from '@angular/core';
import {Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-evaluator-main',
  templateUrl: './evaluator-main.component.html',
  styleUrls: ['./evaluator-main.component.scss']
})
export class EvaluatorMainComponent implements OnInit {

  constructor(private clip: Clipboard) { }

  ngOnInit(): void {
  }
  textToBeCopied=
  `
  from singlecellcdata.metrics import Evaluator

  evaluator = Evaluator(name = "SNARE-seq mouse")
  
  # You can learn the input and output format specification of the evaluator as follows.
  # print(evaluator.expected_input_format)
  # print(evaluator.expected_output_format)
  
  input_dict = {"y_true": y_true, "y_pred": y_pred}
  result_dict = evaluator.eval(input_dict) # E.g., {"rocauc": 0.7321}`;
  copyText() {
    this.clip.copy(this.textToBeCopied);
    }

}
