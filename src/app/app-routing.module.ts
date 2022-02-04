import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CreatepollComponent } from './createpoll/createpoll.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeaderComponent } from './Header/Header.component'
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { UserComponent } from './user/user.component'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user', component: UserComponent },
  { path: 'createpoll', component: CreatepollComponent },
  { path: 'Header', component: HeaderComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
