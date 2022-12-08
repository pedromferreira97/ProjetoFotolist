import { Component } from '@angular/core';
import { Cliente } from '../formulario/cliente.model';

@Component({
  selector: 'pro-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clientes: Cliente[] = [];
}
