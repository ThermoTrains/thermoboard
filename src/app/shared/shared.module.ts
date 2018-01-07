import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';
import { ValuesComponent } from './values/values.component';
import { ValueStringComponent } from './value-string/value-string.component';
import { ValueTemperatureComponent } from './value-temperature/value-temperature.component';
import { ValueImageComponent } from './value-image/value-image.component';
import { ValueNumberComponent } from './value-number/value-number.component';
import { ValueImageDialogComponent } from './value-image-dialog/value-image-dialog.component';
import { AddFavoriteComponent } from './add-favorite/add-favorite.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [
    ValueImageComponent,
    ValueImageDialogComponent,
    ValueNumberComponent,
    ValuesComponent,
    ValueStringComponent,
    ValueTemperatureComponent,
    AddFavoriteComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,

    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    ValueImageComponent,
    ValueNumberComponent,
    ValuesComponent,
    ValueStringComponent,
    ValueTemperatureComponent,
    AddFavoriteComponent,
  ],
  entryComponents: [
    ValueImageDialogComponent,
  ]
})
export class SharedModule {
}
