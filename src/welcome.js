export class welcome{
    heading = "Welcome to the Aurelia Navigation App!";
    firstName = 'John';
    lastName = 'Doe';

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    submit(){
        alert(`Welcome, ${this.fullName}!!`);
    }
}