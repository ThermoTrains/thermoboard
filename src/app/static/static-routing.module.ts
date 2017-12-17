import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '@app/static/dashboard/dashboard.component';
import { RecordsComponent } from '@app/static/records/records.component';
import { EntityKindsComponent } from '@app/static/entity-kinds/entity-kinds.component';
import { EntitiesComponent } from '@app/static/entities/entities.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  }, {
    path: 'entity-kinds',
    component: EntityKindsComponent,
    data: { title: 'Entity Kinds' }
  }, {
    path: 'records',
    component: RecordsComponent,
    data: { title: 'Records' }
  }, {
    path: 'entities',
    component: EntitiesComponent,
    data: { title: 'Entities' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {
}
