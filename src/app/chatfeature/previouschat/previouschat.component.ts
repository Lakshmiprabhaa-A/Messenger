import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { contactschats } from 'src/app/services/chats.service';
import { DatePipe} from '@angular/common';

@Component({
	selector: 'app-previouschat',
	templateUrl: './previouschat.component.html',
	styleUrls: ['./previouschat.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [DatePipe]

})

export class PreviouschatComponent implements OnInit{
 
	@Input() conversation:any;

	newMessage:string='';
	messageList: any;
	profileDetails:any=[];
	profileCountDetails:number[] = [];
	Istyping:boolean=false;

	// formatting time and date

	now:any = new Date();
	hours:any = this.now.getHours().toString().padStart(2, '0');
	minutes:any = this.now.getMinutes().toString().padStart(2, '0');
	currentTime:string=this.hours+":"+this.minutes;

	currentDate:any = new Date();
	options:object = { day: '2-digit', month: '2-digit', year: 'numeric' };
	formattedDate:any = this.currentDate.toLocaleDateString('en-GB', this.options);

	headericons:string[]=[
		"/assets/phone.PNG",
		"/assets/videocall.PNG",
		"/assets/bluemore.PNG"
	]
	profileSubIcons:any=
	[
		{srcLink:"/assets/profile.PNG",text:"Profile"},
		{srcLink:"/assets/mute.PNG",text:"Mute"},
		{srcLink:"/assets/search.PNG",text:"search"}
	];
	paneltwo:any=
	[
		{srcLink:"/assets/theme.PNG",text:"Change theme"},
		{srcLink:"/assets/emoji.PNG",text:"Change emoji"},
		{srcLink:"/assets/nickname.PNG",text:"Edit nicknames"},
		{srcLink:"/assets/searchInChat.PNG",text:"Search in conversation"}
	]
	panelthree:any=
	[
		{srcLink:"/assets/gallery.PNG",text:"Media"},
		{srcLink:"/assets/files.PNG",text:"Files"},
		{srcLink:"/assets/links.PNG",text:"Links"}
	]
	panelfour:any=
	[
		{srcLink:"/assets/bellicon.PNG",text:"Mute notification"},
		{srcLink:"/assets/ignore.PNG",text:"Ignore Messages"},
		{srcLink:"/assets/block.PNG",text:"Block"}
	]

	//images for icons

	like="/assets/like.PNG"
	send="/assets/send.PNG"
	gif="/assets/gif.PNG"
	files="/assets/files.PNG"
	images="/assets/image.PNG"
	smiley="/assets/smiley.PNG"
	plus="/assets/plus.PNG"
	pin="/assets/pin.PNG"
	Profilefiles="/assets/Profilefiles.PNG"
	report="/assets/report.PNG"

	constructor(private chatservice:contactschats) {}

	ngOnInit(): void {}

// new messages are pushed to pre existing chats using this function

	sendMessage(id:number) {
		
		this.chatservice.addProfile(id);
		this.chatservice.ChangeInCount(1);
		this.messageList={
			id:(this.conversation.messages.length)+1, 
			body:this.newMessage,
			date:this.formattedDate, 
			time:this.currentTime, 
			me:true 
		};
		this.conversation.messages.push(this.messageList);
		this.newMessage = '';
	}
	typeOf(value:any) {
		return typeof value;
	}

// logic to avoid displaying date and time is messages are sent together

	check(i:number){
		if(i==0){
		return true;
		}
		else if(this.conversation.messages[i-1].time==this.conversation.messages[i].time
		&& this.conversation.messages[i-1].date==this.conversation.messages[i].date){
		return false;
		}
		else{
		return true;
		}
	}

  //custom accordion logic for profile section

	expand(event:any, iconright:any, iconleft:any){
		if (event.style.display === "block") {
		event.style.display = "none";
		iconright.style.display="block";
		iconleft.style.display="none";  
		} 
		else {
		event.style.display = "block";
		iconright.style.display="none";
		iconleft.style.display="block";
		}  
	}
  
  //input part 
  
	typing(){
		this.Istyping=true;
	}
	nottyping(){
		if(this.newMessage=="")
		this.Istyping=false;
	}
}

