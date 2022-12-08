import { Component, OnInit } from '@angular/core';
import { Cliente } from '../formulario/cliente.model';
import { DatabaseService } from '../servico/database.service';

@Component({
  selector: 'pro-fotolist',
  templateUrl: './fotolist.component.html',
  styleUrls: ['./fotolist.component.css']
})
export class FotolistComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor (private db: DatabaseService) {}

  ngOnInit(): void {
    this.db.getCliente().subscribe(results => this.clientes = results);
  } 

  delCli(id: Number) {
    this.db.delCliente(id);
    location.reload();
  }
}
