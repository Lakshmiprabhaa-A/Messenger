import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { logincheck } from 'src/app/services/loginDetails.service';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-intropage',
	templateUrl: './intropage.component.html',
	styleUrls: ['./intropage.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class IntropageComponent implements OnInit, CanActivate {
	
	//images and icons

	icon = './assets/messenger-icon.png';
	meta = './assets/metasymbol.PNG';
	introimgright = './assets/introimg.PNG';
	appstrorems = './assets/appstore-ms.PNG';

	usernameEntered: string = '';
	passwordEntered: string = '';

	usernameerror: boolean = true;

	introtext:string[]=["Hang out", "anytime,", "anywhere"];
	introsubtext:string[]=["Messenger makes it easy and fun to stay close to your","favourite people."];
	topNavBarItems:string[]=[
		"Features",
		"Desktop app",
		"Privacy and safety"
	]
	bottomNavBarItems:string[]=[
		"The Apple and Google Play logos are trademarks of their respective owners.",
		"Privacy Policy",
		"Cookie Policy"
	]
	//login details from service

	loginService = new logincheck();
	loginForm: FormGroup;

	constructor(private router: Router) { }

	ngOnInit(): void { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (
			!this.loginService.checkUsername(this.usernameEntered) ||
			!this.loginService.checkPassword(this.passwordEntered)) 	
		{
				return false;
		}
			return true;
	}
	checkForRightUser() {
		if (
			!this.loginService.checkUsername(this.usernameEntered) ||
			!this.loginService.checkPassword(this.passwordEntered)) {
			this.router.navigate(['/login']);
			if (!this.loginService.checkUsername(this.usernameEntered)) {
				this.usernameerror = true;
				return;
			} else if (!this.loginService.checkPassword(this.passwordEntered)) {
				this.usernameerror = false;
				return;
			}
		}
		else {
			this.router.navigate(['/mainpage']);
		}
	}

	@Output() UsernameError: EventEmitter<any> = new EventEmitter();

	UsernameErrorFunc(param: boolean) {
		this.UsernameError.emit(this.usernameerror);
	}
}
