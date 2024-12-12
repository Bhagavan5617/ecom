import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbRatingModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(config: NgbRatingConfig) {

		config.max = 5;
		config.readonly = true;
	}
}
