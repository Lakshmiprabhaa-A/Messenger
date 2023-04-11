export class logincheck{

    originalUsermail="prabhaa@gmail.com";
    originalUserno="9876543210";
    originalPassword="123456";

    checkUsername(UsermailEntered:string){
        if(UsermailEntered==this.originalUsermail || UsermailEntered==this.originalUserno)
            return true;
        else
            return false;
    }
    checkPassword(passwordEntered:string){
        if(passwordEntered==this.originalPassword)
            return true;
        else
            return false;
    }
}