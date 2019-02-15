import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { HeaderComponent } from './components/header/header.component';
import { AlertDangerComponent } from './components/alert-danger/alert-danger.component';
import { AlertWarningComponent } from './components/alert-warning/alert-warning.component';
import { TestFormComponent } from './components/test-form/test-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServerComponent,
    ServersComponent,
    AlertDangerComponent,
    AlertWarningComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
