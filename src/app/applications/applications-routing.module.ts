import { NgModule } from '@angular/core';

import { AuthGuardService } from '@app/core';

import { ParentComponent } from './theming/parent/parent.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { TodosContainerComponent } from './todos/components/todos-container.component';
import { StockMarketContainerComponent } from './stock-market/components/stock-market-container.component';
import { CrudComponent } from './crud/components/crud.component';
import { FormComponent } from './form/components/form.component';
import { NotificationsComponent } from './notifications/components/notifications.component';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';

const routes: Routes = [
  {
    path: '',
    component: ExamplesComponent,
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
      },
      {
        path: 'stock-market',
        component: StockMarketContainerComponent,
        data: { title: 'zi7.examples.menu.stocks' }
      },
      {
        path: 'theming',
        component: ParentComponent,
        data: { title: 'zi7.examples.menu.theming' }
      },
      {
        path: 'crud',
        redirectTo: 'crud/',
        pathMatch: 'full'
      },
      {
        path: 'crud/:id',
        component: CrudComponent,
        data: { title: 'zi7.examples.menu.crud' }
      },
      {
        path: 'form',
        component: FormComponent,
        data: { title: 'zi7.examples.menu.form' }
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
        data: { title: 'zi7.examples.menu.notifications' }
      },
      {
        path: 'authenticated',
        component: AuthenticatedComponent,
        canActivate: [AuthGuardService],
        data: { title: 'zi7.examples.menu.auth' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule {}
