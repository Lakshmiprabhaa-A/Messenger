import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class logincheck implements CanActivate{

    originalUsermail="prabhaa@gmail.com";
    originalUserno="9876543210";
    originalPassword="123456";
    Use:string="";
    Pwe:string="";
    checkUsername(UsermailEntered:string){
        this.Use=UsermailEntered;
        if(UsermailEntered==this.originalUsermail || UsermailEntered==this.originalUserno){
            return true;
        }
        else
            return false;
    }
    checkPassword(passwordEntered:string){
        this.Pwe=passwordEntered;
        if(passwordEntered==this.originalPassword){
            return true;
        }
        else
            return false;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		if (
			!this.checkUsername(this.Use) ||
			!this.checkPassword(this.Pwe)) 	
		{
				return true;
		}
			return true;
	}
}