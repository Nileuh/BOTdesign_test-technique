import { Component, OnInit, Input } from '@angular/core';
import  *  as  seed  from  '../../assets/seed.json';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-liste-pokemons',
  templateUrl: './liste-pokemons.component.html',
  styleUrls: ['./liste-pokemons.component.scss']
})
export class ListePokemonsComponent implements OnInit {
  pokemons: any = (seed as any).default;

  @Input()
  searchPokemon:Pokemon;

  constructor() { 
  }

  ngOnInit() {
  }

}
