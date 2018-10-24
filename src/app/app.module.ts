import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AtomsModule } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AtomsModule,
    MoleculesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
