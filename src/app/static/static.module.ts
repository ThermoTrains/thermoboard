import { NgModule } from '@angular/core';
import { StaticRoutingModule } from './static-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecordsComponent } from './records/records.component';
import { EntityKindsComponent } from './entity-kinds/entity-kinds.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntityComponent } from './entity/entity.component';
import { RecordComponent } from './record/record.component';

@NgModule({
  imports: [SharedModule, StaticRoutingModule],
  declarations: [DashboardComponent, RecordsComponent, EntityKindsComponent, EntitiesComponent, EntityComponent, RecordComponent]
})
export class StaticModule {
}
