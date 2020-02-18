import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PetComponent } from './pages/pet/pet.component';
import { AddPetComponent } from './pages/add-pet/add-pet.component';
import { PetsListComponent } from './pages/pets-list/pets-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'pet-search',
    pathMatch: 'full'
  },
  { path: 'pet', component: PetComponent },
  { path: 'add-pet', component: AddPetComponent },
  { path: 'pet-search', component: PetsListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
