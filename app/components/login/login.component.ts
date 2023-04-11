import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { logincheck } from 'src/app/services/loginDetails.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	icon = '/assets/messenger-icon.png';

	loginService = new logincheck();

	emailerror: boolean = true;

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
