import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { AddpostComponent } from './posts/addpost/addpost.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts',
    component: PostsListComponent,
    children: [{ path: 'add', component: AddpostComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
