import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AuthenticationGuard } from './guards/authentication.guard';


const routes: Routes = [
{path: '', component: HomepageComponent, canActivate: [AuthenticationGuard]},
{path: 'home', component: HomepageComponent, canActivate: [AuthenticationGuard]},
{path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
