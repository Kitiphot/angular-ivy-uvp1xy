import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
//import { UserModule } from '../user/user.module';

@NgModule({
  imports: [CommonModule, LoginRoutingModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class LoginModule {}
