import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LolComponent} from './lol/lol.component';
import {AmeerComponent} from './ameer/ameer.component';
import {Ameer2Component} from './ameer/ameer2/ameer2.component';
const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'Lol' , component: LolComponent},
  {path : 'Ameer' , component: AmeerComponent},
  {path: 'Ameer/Ameer2' , component: Ameer2Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
