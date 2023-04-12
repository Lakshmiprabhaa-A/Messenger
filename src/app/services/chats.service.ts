import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

interface KeyValue {
  [key: number]: number;
}

@Injectable({
	providedIn: 'root'
})

export class contactschats {
	
	//for notification

	totalNewMessages: number = 0;

	myObject: KeyValue = {};


	contacts: object = [
		{
			uniqueId: 1,
			photo: "./assets/Dora.jpg",
			name: "Dora",
			status: "Lo hicimos! We did it!",
			messages: [
				{ id: 1, body: 'Did you see swiper?', date: "26/03/2023", time: '06:00', me: false },
				{ id: 2, body: 'yes', date: "26/03/2023", time: '06:01', me: true },
				{ id: 3, body: 'Can you help us?', date: "26/03/2023", time: '06:01', me: false },
				{ id: 4, body: 'NO', date: "26/03/2023", time: '06:03', me: true },
				{ id: 5, body: 'Say swiper No swiping', date: "26/03/2023", time: '06:04', me: false },
				{ id: 6, body: 'Swiper No Swiping', date: "26/03/2023", time: '06:04', me: false },
				{ id: 7, body: 'Thank you for helping us', date: "26/03/2023", time: '06:05', me: false },
			]
		},
		{
			uniqueId: 2,
			photo: "./assets/belle.jpg",
			name: "Belle",
			status: "I want much more than this life",
			messages: [
				{ id: 1, body: 'Living with monster', date: "25/03/2023", time: '06:00', me: false },
				{ id: 2, body: 'Really?', date: "25/03/2023", time: '06:01', me: true },
				{ id: 3, body: 'True', date: "25/03/2023", time: '06:01', me: false },
				{ id: 4, body: "That he's no prince Charming", date: "25/03/2023", time: '06:03', me: false },
				{ id: 5, body: "Maybe", date: "25/03/2023", time: '06:03', me: true },
				{ id: 6, body: "There's something in him", date: "25/03/2023", time: '06:03', me: false },
				{ id: 7, body: "That i didn't see", date: "25/03/2023", time: '06:04', me: false },
				{ id: 8, body: "Beauty and the Beast!", date: "25/03/2023", time: '06:04', me: true }
			]
		},
		{
			uniqueId: 3,
			photo: "./assets/Aurora.jpg",
			name: "Aurora",
			status: "Currently Sleeping",
			messages: [
				{ id: 1, body: 'hello', date: "24/03/2023", time: '06:00', me: false },
				{ id: 2, body: 'When did you woke up?', date: "24/03/2023", time: '06:01', me: true },
				{ id: 3, body: 'Just now', date: "24/03/2023", time: '06:01', me: false },
				{ id: 4, body: 'How because of that prince', date: "24/03/2023", time: '06:03', me: true },
				{ id: 5, body: "No", date: "24/03/2023", time: '06:04', me: false },
				{ id: 6, body: "Then how?", date: "24/03/2023", time: '06:04', me: true },
				{ id: 7, body: "Because of Insta Notification", date: "24/03/2023", time: '06:05', me: false }
				// {id:8, body:"Jungshook!", time:'6.06', me:true },
			]
		},
		{
			uniqueId: 4,
			photo: "./assets/JackieChan.jpg",
			name: "Jackie",
			status: "Great Success comes with Great Aim",
			messages: [
				{ id: 1, body: 'Hai Jackie', date: "23/03/2023", time: '06:00', me: true },
				{ id: 2, body: 'hi', date: "23/03/2023", time: '06:01', me: false },
				{ id: 3, body: 'how are you?', date: "23/03/2023", time: '06:01', me: false },
				{ id: 4, body: 'Great! And you?', date: "23/03/2023", time: '06:03', me: true },
				{ id: 7, body: "Good", date: "23/03/2023", time: '06:04', me: false },
			]
		},
		{
			uniqueId: 5,
			photo: "/assets/ben10.jpg",
			name: "Ben Tennyson",
			status: "Its Action Time",
			messages: [
				{ id: 1, body: 'Hi Ben, hurry up and go to stadium', date: "22/03/2023", time: '12:19', me: true },
				{ id: 2, body: 'why i am sleepng', date: "22/03/2023", time: '12:25', me: false },
				{ id: 3, body: 'tdys julie Tennis match finals', date: "22/03/2023", time: '12:26', me: true },
				{ id: 4, body: 'What???!!!', date: "22/03/2023", time: '12:26', me: false },
				{ id: 5, body: 'Use JetRay and fly', date: "22/03/2023", time: '12:27', me: true },

			]
		},
		{
			uniqueId: 6,
			photo: "./assets/gwen.jpg",
			name: "Gwen Tennyson",
			status: "Messed with a wrong Girl",
			messages: [
				{ id: 1, body: 'Gwen are you at stadium?', date: "22/03/2023", time: '12:10', me: true },
				{ id: 2, body: 'Kevin asked about your whereabouts', date: "22/03/2023", time: '12:10', me: true },
				{ id: 3, body: 'Just an conformation', date: "22/03/2023", time: '12:11', me: true },
				{ id: 4, body: 'Yeah', date: "22/03/2023", time: '12:15', me: false },
				{ id: 5, body: 'Kevin and Ben forgot the match completely', date: "22/03/2023", time: '12:15', me: false },
				{ id: 6, body: 'Julie is very sad and angry about Ben', date: "22/03/2023", time: '12:16', me: false },
				{ id: 7, body: 'i will remind Ben', date: "22/03/2023", time: '12:17', me: true },
			]
		},
		{
			uniqueId: 7,
			photo: "./assets/kevin.jpg",
			name: "Kevin",
			status: "Action speaks more than words",
			messages: [
				{ id: 1, body: 'Where is Gwen?', date: "22/03/2023", time: '12:00', me: false },
				{ id: 2, body: 'Is she with you?', date: "22/03/2023", time: '12:01', me: false },
				{ id: 3, body: 'No', date: "22/03/2023", time: '12:01', me: true },
				{ id: 4, body: 'I think she is in the stadium', date: "22/03/2023", time: '12:03', me: true },
				{ id: 5, body: 'She went to support Julie', date: "22/03/2023", time: '12:03', me: true },
				{ id: 6, body: 'For What?', date: "22/03/2023", time: '12:03', me: false },
				{ id: 7, body: 'Tennis Match - Finals', date: "22/03/2023", time: '12:04', me: true },
				{ id: 8, body: 'Its gonna be a bad day today', date: "22/03/2023", time: '12:04', me: false },
				{ id: 9, body: 'For you? Why?', date: "22/03/2023", time: '12:04', me: true },
				{ id: 10, body: 'For Ben!!! HaHaHaa', date: "22/03/2023", time: '12:04', me: false },
			]
		},
		{
			uniqueId: 8,
			photo: "./assets/snowwhite.jpg",
			name: "Snow white",
			status: "Apple and 7 Dwarfs",
			messages: [
				{ id: 1, body: 'I need apples', date: "22/03/2023", time: '09:00', me: false },
				{ id: 2, body: 'For you?', date: "22/03/2023", time: '09:01', me: true },
				{ id: 3, body: 'For me and My pets', date: "22/03/2023", time: '09:02', me: false },
				{ id: 4, body: 'Also for my Seven Dwarf Friends', date: "22/03/2023", time: '09:03', me: false },
				{ id: 5, body: 'Ok I will bring to the Forest', date: "22/03/2023", time: '09:04', me: true },
				{ id: 6, body: 'Thank you', date: "22/03/2023", time: '09:04', me: false },
				{ id: 7, body: 'Stay Safe', date: "22/03/2023", time: '09:05', me: true },
				{ id: 8, body: 'From your Step Mother', date: "22/03/2023", time: '09:05', me: true },
				{ id: 9, body: 'Sure :)', date: "22/03/2023", time: '09:07', me: false },
			]
		},
		{
			uniqueId: 9,
			photo: "/assets/julie.png",
			name: "Julie",
			status: "Adventures vs Schools",
			messages: [
				{ id: 1, body: 'hello', date: "22/03/2023", time: '05:00', me: true },
				{ id: 2, body: 'hi Julie', date: "22/03/2023", time: '06:01', me: true },
				{ id: 3, body: 'how are you?', date: "22/03/2023", time: '06:01', me: false },
				{ id: 4, body: 'Great! And you?', date: "22/03/2023", time: '06:03', me: true },
				{ id: 5, body: 'Boring classes and Assignments', date: "22/03/2023", time: '06:03', me: false },
				{ id: 6, body: 'Waiting for summer vacation', date: "22/03/2023", time: '06:04', me: true },
				{ id: 7, body: 'Just 15 days left for your Adventure', date: "22/03/2023", time: '07:03', me: true },
				{ id: 8, body: 'Waiting', date: "22/03/2023", time: '07:03', me: false },

			]
		},
		{
			uniqueId: 10,
			photo: "./assets/Uncle jackiechan.jpg",
			name: "Uncle",
			status: "Dei Jackieeee Bheemaaa",
			messages: [
				{ id: 1, body: 'Uncle send Bheema to get this lizard', date: "21/03/2023", time: '08:40', me: true },
				{ id: 2, body: 'Aahh lizard i will send Bheema ', date: "21/03/2023", time: '09:01', me: false },
				{ id: 3, body: 'Bheemaaa waste fellow', date: "21/03/2023", time: '10:05', me: false },
				{ id: 4, body: 'went somewhere', date: "21/03/2023", time: '10:05', me: false },
				{ id: 5, body: 'i will send Jackiee', date: "21/03/2023", time: '10:06', me: false },
				{ id: 6, body: 'Ok Uncle', date: "21/03/2023", time: '10:10', me: true },
			]
		}
	]

//for Notification

	addProfile(profileId: number) {
		this.totalNewMessages += 1;
		if (!(profileId in this.myObject)) {
			    this.myObject[profileId] = 1;
    	}
		else{
			let tempCount: number = this.myObject[profileId];
			tempCount=tempCount + 1;
			this.myObject[profileId] = tempCount;
		}
		
		this.ChangeInHashMapEvent();
	}

	removeProfile(profileId: number) {
		this.totalNewMessages -= this.myObject[profileId];
		delete this.myObject[profileId];
		this.ChangeInHashMapEvent();
	}

	markAllAsRead() {
		this.totalNewMessages = 0;
		this.myObject = {};
		this.ChangeInHashMapEvent();
	}

	constructor() {}

	//Subject and BehaviourSubject

	changeInHashMap = new Subject<any>();
	ChangeInHashMapEvent() {
		this.changeInHashMap.next(this.myObject);
	}

	changeInCount = new BehaviorSubject<number>(0);
	ChangeInCount(eachProfile: number) {
		this.changeInCount.next(this.totalNewMessages);
	}
}