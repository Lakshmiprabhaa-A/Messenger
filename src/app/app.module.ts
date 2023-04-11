import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IntropageComponent } from './components/intropage/intropage.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatfeatureModule } from './chatfeature/chatfeature.module';

@NgModule({
	declarations: [
		AppComponent,
		IntropageComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		ChatfeatureModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
