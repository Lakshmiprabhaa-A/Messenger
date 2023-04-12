import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { contactschats } from 'src/app/services/chats.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-searchnavbar',
	templateUrl: './searchnavbar.component.html',
	styleUrls: ['./searchnavbar.component.scss'],
})
export class SearchnavbarComponent implements OnInit, OnDestroy {

	//outputing the text entered in search

	@Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();
	@Output() newMsgProfile: EventEmitter<boolean> = new EventEmitter<boolean>();

	numberOfNewMessages: number;

	isSearching: string = 'false';

	enteredSearchValue: string = '';

	private subscription: Subscription;

	//images for icons

	vd = './assets/videorecode.png';
	edit = './assets/edit.png';

	constructor(private chatservice: contactschats) { }

	ngOnInit(): void {
		this.subscription = this.chatservice.changeInCount.subscribe((count: number) => {
			this.numberOfNewMessages = count;
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
	
	reloadCurrentPage() {
		window.location.reload();
	}

	onSearchTextChange() {
		this.searchTextChanged.emit(this.enteredSearchValue);
	}
	showNewMessageProfile() {
		this.newMsgProfile.emit(true);
	}
}
