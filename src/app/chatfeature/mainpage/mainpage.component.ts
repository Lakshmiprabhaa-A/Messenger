import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-mainpage',
	templateUrl: './mainpage.component.html',
	styleUrls: ['./mainpage.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainpageComponent implements OnInit {

	downloadwindows = './assets/windows.PNG';
	nochat = './assets/nochat.PNG';

	conversation: any;
	isConversation: boolean = false;

	constructor() { }

	ngOnInit(): void { }

	onConversationSelected(event: any) {
		this.isConversation = true;
		this.conversation = event;
	}
}
