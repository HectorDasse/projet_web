import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddInterventionComponent} from './add-intervention/add-intervention.component';
import {TableComponent} from './composent/table/table.component';


const routes: Routes = [
  { path: 'creation', component: AddInterventionComponent },
  { path: 'interventions', component: TableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
