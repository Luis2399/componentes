import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridPageRoutingModule } from './grid-routing.module';

import { GridPage } from './grid.page';

import { ComponentsModule } from '../../components/components.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: GridPage
}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridPageRoutingModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [GridPage]
})
export class GridPageModule {}
