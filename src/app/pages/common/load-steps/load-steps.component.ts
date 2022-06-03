import { Component, OnInit } from '@angular/core';
import {Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-load-steps',
  templateUrl: './load-steps.component.html',
  styleUrls: ['./load-steps.component.scss']
})
export class LoadStepsComponent implements OnInit {

  constructor(private clip:Clipboard ) { }

  ngOnInit(): void {
  }

  textToBeCopied=
  `
 from singlecellcdata.preprocessed import PreprocessedDataset
 from torch_sequence.data import DataLoader
 
 # Download and process data at './dataset/SNARE-seq mouse/'
 dataset = PreprocessedDataset(name = "SNARE-seq mouse", root = 'dataset/')

 split_idx = dataset.get_idx_split()
 train_loader = DataLoader(dataset[split_idx["train"]], batch_size=32, shuffle=True)
 valid_loader = DataLoader(dataset[split_idx["valid"]], batch_size=32, shuffle=False)
 test_loader = DataLoader(dataset[split_idx["test"]], batch_size=32, shuffle=False)`;

  copyText() {
    this.clip.copy(this.textToBeCopied);
    }


}
