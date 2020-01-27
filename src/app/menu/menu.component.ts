import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // private searchTerms = new Subject<string>();
	// pokemons$: Observable<Pokemon[]>;

  constructor() { }

  // 	// Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
	// search(term: string): void {
	// 	this.searchTerms.next(term);
	// }


  ngOnInit() {
  }

}
