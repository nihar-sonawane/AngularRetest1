import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './task1/list.component';
import { MiddlewareComponent } from './middleware/middleware.component';
import { DisplayComponent } from './task2/display.component';
import { PaginatedComponent } from './task3-paginated/paginated.component';

const routes: Routes = [{ path: 'list', component: ListComponent },
{ path: 'middleware', component: MiddlewareComponent },
{ path: 'pagination', component: PaginatedComponent },
{ path: 'display', component: DisplayComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
