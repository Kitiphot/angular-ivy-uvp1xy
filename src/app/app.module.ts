import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    LoginModule,
    UserModule,
    RouterModule.forRoot([])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
