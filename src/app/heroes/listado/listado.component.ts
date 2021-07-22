import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  heroes: string[] = ['Spiderman', 'Batman', 'Goku', 'Thor', 'Aquaman'];

  eliminarHeroe(){
    this.heroes.shift();
  }

  ngOnInit(): void {
  }

}
