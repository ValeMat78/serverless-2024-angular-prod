import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-inserimento-pazienti',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './inserimento-pazienti.component.html',
  styleUrl: './inserimento-pazienti.component.css'
})
export class InserimentoPazientiComponent {

}
