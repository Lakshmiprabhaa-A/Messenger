import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { contactschats } from 'src/app/services/chats.service';

interface KeyValue {
	[key: number]: number;
  }

@Component({
	selector: 'app-chatcontacts',
	templateUrl: './chatcontacts.component.html',
	styleUrls: ['./chatcontacts.component.scss'],
})
export class ChatcontactsComponent implements OnInit,OnDestroy {

	// for chat list clicked will be emitted to previouschat component
	@Output() contactClicked: EventEmitter<any> = new EventEmitter();

	//services
	contacts: any = this.chatservice.contacts;

	// for notification functionality

	displayIcon: boolean = false;
	notificationButtonClicked: boolean = false;

	profileIds: number[] = [];
	profileCountDetails: number[] = [];
	totalCount: number;

	downloadwindows = '/assets/downloads.PNG';
	nochat = '/assets/nochat.PNG';
	optionss = '/assets/more.PNG';
	search = '/assets/bigsearchicon.PNG';

	// for search functionality

	searchText: string = '';
	parentIsSearching: boolean = false;
	private subscription: Subscription;

	constructor(private router: Router, private chatservice: contactschats) {}

	ngOnInit(): void {
		this.subscription = this.chatservice.changeInHashMap.subscribe((myObject: KeyValue) => {
			this.totalCount = 0;
			this.profileIds = [];
			this.profileCountDetails = [];
			for(let key in myObject) {
				let keyNum=+key;
				this.totalCount += myObject[key];
				if (this.profileIds.includes(keyNum)) {
					this.profileCountDetails[this.profileIds.indexOf(keyNum)] = myObject[key];
				}		
				else{
					this.profileIds.push(keyNum);
					this.profileCountDetails.push(myObject[key]);
				}
			}
		});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
	
	//remove particular profile from notification

	removeProfile(id: number) {
		this.chatservice.removeProfile(id);
		this.chatservice.ChangeInCount(1);
	}

	//remove all profile from notification

	removeAll() {
		this.chatservice.markAllAsRead();
		this.chatservice.ChangeInCount(1);
		this.totalCount = 0;
		return;
	}

	check(param: boolean) {
		this.notificationButtonClicked = !this.notificationButtonClicked;
	}

	// for search functionality

	onSearchTextEntered(searchValue: string) {
		this.searchText = searchValue;
		this.parentIsSearching = true;
	}

	contactClickedFunc(param: any) {
		this.contactClicked.emit(param);
	}
}
