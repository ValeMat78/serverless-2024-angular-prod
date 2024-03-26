import { Component } from '@angular/core';
import { TabellaPazientiComponent } from "../tabella-pazienti/tabella-pazienti.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [TabellaPazientiComponent,
                RouterLink,
                RouterLinkActive
            ]
})
export class DashboardComponent {
    constructor(private router: Router){}


}
