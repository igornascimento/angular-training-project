import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertDangerComponent } from './components/alert-danger/alert-danger.component';
import { AlertWarningComponent } from './components/alert-warning/alert-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    ServersComponent,
    AlertDangerComponent,
    AlertWarningComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
