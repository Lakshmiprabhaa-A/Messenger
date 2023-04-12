import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { logincheck } from 'src/app/services/loginDetails.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit, CanActivate {

	emailerror: boolean = true;

	loginForm: FormGroup;

	icon = './assets/messenger-icon.png';

	loginService = new logincheck();

	bottomNavBarItems: string[] = [
		"Not on Facebook?",
		"Forgotten password",
		"Privacy Policy",
		"Terms",
		"Cookies Policy",
		"© Meta 2023"
	]
	constructor(private router: Router) {

		this.loginForm = new FormGroup({
			usernameEntered: new FormControl('', [
				Validators.required
			]),
			passwordEntered: new FormControl('', [
				Validators.required,
				Validators.minLength(5),
			]),
		});

	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (!this.loginService.checkUsername(this.loginForm.getRawValue().usernameEntered) ||
			!this.loginService.checkPassword(this.loginForm.getRawValue().passwordEntered) )	{
				return false;
		}
			return true;	
	}

	ngOnInit(): void { }

	checkForRightUser() {
		if (!this.loginService.checkUsername(this.loginForm.getRawValue().usernameEntered) ||
			!this.loginService.checkPassword(this.loginForm.getRawValue().passwordEntered) ||
			this.loginForm.invalid) {

			//for error message display based on email or password

			if (!this.loginService.checkUsername(this.loginForm.getRawValue().usernameEntered)) {
				this.emailerror = true;
				return;
			}
			else if (!this.loginService.checkPassword(this.loginForm.getRawValue().passwordEntered)) {
				this.emailerror = false;
				return;
			}
		}
		else {
			this.router.navigate(['/mainpage']);
		}
	}
}
