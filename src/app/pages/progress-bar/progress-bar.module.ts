import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressBarPageRoutingModule } from './progress-bar-routing.module';

import { ProgressBarPage } from './progress-bar.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProgressBarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressBarPageRoutingModule,
    RouterModule.forChild(routes),
    ComponentsModule,
  ],
  declarations: [ProgressBarPage]
})
export class ProgressBarPageModule {}
