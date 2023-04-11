import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sidenavbar',
	templateUrl: './sidenavbar.component.html',
	styleUrls: ['./sidenavbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavbarComponent implements OnInit {

	sidenavbaricon = "/assets/sidenavbaricons.PNG";
	searchicon = "/assets/search.PNG";
	minmaxicon = "/assets/minmax.PNG";
	myprofilepic = "/assets/myprofilepic.jpg"

	constructor(private router: Router) { }

	ngOnInit(): void { }

	logout() {
		this.router.navigate(['/']);
	}
}
