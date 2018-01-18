import { NgModule } from '@angular/core';
import { StaticRoutingModule } from './static-routing.module';
import { SharedModule } from '@app/shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecordsComponent } from './records/records.component';
import { EntityKindsComponent } from './entity-kinds/entity-kinds.component';
import { EntitiesComponent } from './entities/entities.component';
import { EntityComponent } from './entity/entity.component';
import { RecordComponent } from './record/record.component';
import { EntityRecordComponent } from './entity-record/entity-record.component';
import { Chart } from 'chart.js';

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule,
  ],
  declarations: [
    DashboardComponent,
    RecordsComponent,
    EntityKindsComponent,
    EntitiesComponent,
    EntityComponent,
    RecordComponent,
    EntityRecordComponent,
  ]
})
export class StaticModule {
}

Chart.pluginService.register({
  afterDatasetsDraw: function (chartInstance) {
    const ctx = chartInstance.ctx;
    chartInstance.data.datasets.forEach(function (dataset, i) {
      const meta = chartInstance.getDatasetMeta(i);

      if (!meta.hidden) {
        meta.data.forEach(function (element, index) {
          // Draw the text in black, with the specified font
          ctx.fillStyle = 'grey';
          const fontSize = 16;
          ctx.font = `${fontSize}px Roboto`;
          ctx.fillStyle = '#fff';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const padding = 5;
          const position = element.tooltipPosition();
          ctx.fillText(String(chartInstance.data.labels[index]), position.x, position.y - (fontSize / 2) - padding);
        });
      }
    });
  }
});
