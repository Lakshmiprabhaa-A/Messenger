import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntropageComponent } from './components/intropage/intropage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
	{ path: '', component: IntropageComponent },
	{ path: 'login', component: LoginComponent },
	{ 	path: 'mainpage', 
		loadChildren: () => import('./chatfeature/chatfeature.module').then(m => m.ChatfeatureModule) 
	}
]
@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
