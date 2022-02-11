import { Component, Input, OnInit } from '@angular/core';
import { Training } from 'src/app/models/training.model';
import { TrainingsComponent } from '../trainings.component';

@Component({
  selector: 'app-training-preview',
  templateUrl: './training-preview.component.html',
  styleUrls: ['./training-preview.component.css']
})
export class TrainingPreviewComponent extends TrainingsComponent{
  @Input() training:Training;
}
