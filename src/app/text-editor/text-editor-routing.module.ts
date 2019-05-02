import { NgModule } from '@angular/core';

import { TodosContainerComponent } from './todos/components/todos-container.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleHomeComponent } from './module-home/module-home.component';

const routes: Routes = [
  {
    path: '',
    component: ModuleHomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
      },
      {
        path: 'todos',
        component: TodosContainerComponent,
        data: { title: 'zi7.examples.menu.todos' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule {}
