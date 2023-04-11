import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { ChatcontactsComponent } from './chatcontacts/chatcontacts.component';
import { PreviouschatComponent } from './previouschat/previouschat.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { SearchnavbarComponent } from './searchnavbar/searchnavbar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		MainpageComponent,
		SearchnavbarComponent,
		SidenavbarComponent,
		ChatcontactsComponent,
		PreviouschatComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		RouterModule.forChild([
			{ path: '', component: MainpageComponent }
		])
	]
})
export class ChatfeatureModule { }
