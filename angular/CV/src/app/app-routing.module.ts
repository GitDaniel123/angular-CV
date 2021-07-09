import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './views/description/description.component';
import { ExpirencesComponent } from './views/expirences/expirences.component';

const routes: Routes = [
  { path: 'about', component: DescriptionComponent },
  { path: 'experinces', component: ExpirencesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
