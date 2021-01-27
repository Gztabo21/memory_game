import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent }from './components/card/card.component';

const routes: Routes = [
  { path:'main',component:CardComponent},
  { path: '',   redirectTo: '/main', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: CardComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
