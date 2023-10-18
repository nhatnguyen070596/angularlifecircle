import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { Component2Component } from './component2/component2.component';
import { SharedService } from './common/shareService';
import { Component1Component } from './component1/component1.component';
import { EmitService } from './common/EmitService';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Component2Component,
    Component1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [SharedService,EmitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
