// import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import {AppComponent} from "./app/app.component";
import {appConfig} from "./app/app.config";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h1>Hello from {{ name }}!</h1>
//     <a target="_blank" href="https://angular.dev/overview">
//       Learn more about Angular
//     </a>
//   `,
// })
// export class App {
//   name = 'Angular';
// }

// bootstrapApplication(AppComponent);
bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
);
