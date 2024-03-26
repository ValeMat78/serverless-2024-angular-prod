import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./core/component/dashboard/dashboard.component";
import { InserimentoPazientiComponent } from './core/component/inserimento-pazienti/inserimento-pazienti.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,
              DashboardComponent,
              RouterLink,
              RouterLinkActive,

            ]
})
export class AppComponent {
  title = 'serverless-2024-angular-prod';
}
