import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../servico/database.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'pro-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{
  constructor(private db: DatabaseService, 
    private rota: Router){}
  
  ngOnInit(): void {}

  submit(valor: any) {
    this.db.postCliente(valor.value);
    this.rota.navigate(['/fotos']);

  }
}
