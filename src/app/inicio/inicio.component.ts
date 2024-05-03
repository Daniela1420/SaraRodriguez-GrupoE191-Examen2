//<!-- sara daniela rodriguez rojas grupo 2 -->
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
  id: number;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {
  pokemones: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerPokemones();
  }

  obtenerPokemones() {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=10').subscribe(
      (data: any) => {
        if (data && data.results) {
          data.results.forEach((resultado: any, index: number) => {
            const id = index + 1;
            const name = resultado.name;
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            this.pokemones.push({ id, name, imageUrl });
          });
        }
      },
    );
  }
}