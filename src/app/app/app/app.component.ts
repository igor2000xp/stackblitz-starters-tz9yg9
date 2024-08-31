import { Component } from '@angular/core';
import { HomeComponent } from '../components/home/home.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  styleUrl: './app.component.css',
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-home></app-home>
  `,
})
export class AppComponent {
  name = 'Angular';
}
