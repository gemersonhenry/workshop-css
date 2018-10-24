import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingCardComponent } from './building-card/building-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BuildingCardComponent
  ],
  exports: [
    BuildingCardComponent
  ]
})
export class MoleculesModule { }
