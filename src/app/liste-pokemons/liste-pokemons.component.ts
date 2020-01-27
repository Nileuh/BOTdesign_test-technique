import { Component, OnInit } from '@angular/core';
import  *  as  seed  from  '../../assets/seed.json';

@Component({
  selector: 'app-liste-pokemons',
  templateUrl: './liste-pokemons.component.html',
  styleUrls: ['./liste-pokemons.component.scss']
})
export class ListePokemonsComponent implements OnInit {
  pokemons: any = (seed as any).default;

  constructor() { }

  ngOnInit() {
    console.log(seed);
  }

}
