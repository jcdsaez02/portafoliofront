import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../../servicios/portafolio.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
    miPortafolio:any;
  
    constructor(
      private datosPortafolio:PortafolioService
      ){}
  
    ngOnInit(): void {
      this.datosPortafolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.miPortafolio=data;
      });
    }
  
}
