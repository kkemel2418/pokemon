import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState, setTodos } from '../store/app.state';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor(
    private http: HttpClient,
    private store: Store<{app: IAppState}>
    ){}


  lista: any = {
    results: []
  };

  ngOnInit(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/')
      .subscribe({
        next: (res) => {
          this.lista = res.results;
          this.store.dispatch(setTodos({payload: res}) )
          console.log(this.lista);
        },
        error: (err) => {
          console.error('Erro ao obter os dados:', err);
        }
      });
  }


}

export interface ILista{
     name: string;
     url: string;
}
