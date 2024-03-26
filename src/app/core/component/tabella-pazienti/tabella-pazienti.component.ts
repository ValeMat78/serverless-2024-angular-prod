import { Component } from '@angular/core';
import { CoreHttpService } from '../../service/core-http/core-http.service';
import { IPaziente } from '../../service/models/IPaziente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabella-pazienti',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabella-pazienti.component.html',
  styleUrl: './tabella-pazienti.component.css'
})
export class TabellaPazientiComponent {

  listaPazienti: IPaziente[] = [];

  stampaErrore: any;

  constructor(private corehttp: CoreHttpService){}
  

  ngOnInit() {
    this.recuperaPazienti()
  }

  public recuperaPazienti(){
    this.corehttp.get("/getAllPatients").subscribe((data)=>{
      this.listaPazienti = data
    },
    (error) =>{
      console.log("errore: "+ error);
      this.stampaErrore = error;
    });
  }

  public modificaPaziente(paziente: IPaziente){
    this.corehttp.put("/updatePatient/"+paziente.id,paziente).subscribe((data)=>{
      console.log(data)
    })
  }

  public eliminaPaziente(paziente: IPaziente){
    this.corehttp.delete("/deletePatient/"+paziente.id).subscribe((data)=>{
      this.recuperaPazienti()
      console.log(data)
    })
  }

}
