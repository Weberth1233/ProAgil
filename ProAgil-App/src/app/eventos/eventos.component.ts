import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos : any;
  //Injeção de dependecia do HttpClient buscando dados API  
  constructor(private http : HttpClient) { }
  
  //Antes de rodar o html vai entrar aqui
  ngOnInit() {
    this.getEventos();
  }

  //Pegando dados da api e passando para variavel
  getEventos(){
    this.http.get('https://localhost:5001/WeatherForecast').
    subscribe(
      response => {
        this.eventos = response;
      }, error =>{
        console.log(error);
      }
    );
  }
}
