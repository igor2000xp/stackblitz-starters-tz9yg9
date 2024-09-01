import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  counter = 0;
  intervalCounter = 0;
  counter$ = interval(1000);

  ngOnInit(): void {
    setInterval(() => {
      this.intervalCounter++;
    }, 1000)
  }

  increment() {
    this.counter++;
  } 

}
