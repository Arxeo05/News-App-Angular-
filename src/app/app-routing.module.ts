import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewspageComponent } from './components/newspage/newspage.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/news',
    pathMatch: 'full',
  },
  {
    path: 'news',
    component: NewspageComponent,
  },
  {
    path: 'news/:categ',
    component: NewspageComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
