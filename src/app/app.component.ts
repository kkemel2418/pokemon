import { Component, Input } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { IAppState, decrementaContador, incrementaContador } from './store/app.state';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokemon2';

 // lista: ILista[] = [];
  // lista: any[] = [];
  lista: any = {
    results: []
  };

  constructor(
    private store: Store<{ app: IAppState }>,
    private http: HttpClient,

    ) { }

    /*
    ngOnInit(): void{
    //  this.http.get<ILista[]>('https://pokeapi.co/api/v2/pokemon/')
      this.http.get<ILista[]>('http://jsonplaceholder.typicode.com/todos')
        .subscribe({
           next: (res) => this.lista = res
        })
    }*/
    ngOnInit(): void {
      this.http.get<any>('https://pokeapi.co/api/v2/pokemon/')
        .subscribe({
          next: (res) => {
            this.lista = res.results;
            console.log(this.lista); // Exibe os dados no console
          },
          error: (err) => {
            console.error('Erro ao obter os dados:', err);
          }
        });
    }


  counter$ = this.store
    .select('app')
    .pipe(
      map( e => e.counter)
    );

    incrementaContador(){
      this.store.dispatch(incrementaContador())
    }

    decrementaContador(){
      this.store.dispatch(decrementaContador())
    }
}

export interface ILista{
   // name: string;
  //  url: string;
  userId: number;
  id: number;
  title : string;
  completed: boolean;
}
