import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhePokemonComponent } from './detalhe-pokemon/detalhe-pokemon.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'lista' },
  { path: 'detalhe-pokemon', component: TodoComponent },
  { path: 'lista', component: DetalhePokemonComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
