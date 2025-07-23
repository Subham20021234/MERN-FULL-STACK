// class ClassName{
//     constructor(property1,property2){
//         this.property1=this.property1
//         this.property2=this.property2
//     }
//     method1(){
//         console.log("tghisismethod 1");
//     }
//     method2(){
//         console.log("tghisismethod 2");
//     }
// }


// const p1 = {
//     property1=value1
//     method1:()=>{
//         console.log(method1);
//     }
// }




class BankAccount {
    #PIN
    constructor(name, amount, PIN) {
        this.name = name;
        this.balance = amount;
        this.#PIN = PIN;
        this.accountnumber = Math.floor(Math.random() * 900000 + 100000); 
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Rs.${amount}. New Balance: Rs.${this.balance}`);
        } else {
            console.log("Deposited amount must be greater than 0");
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn Rs.${amount}. New Balance: Rs.${this.balance}`);
        } else {
            console.log("Insufficient balance or invalid amount!");
        }
    }

    pinVerification(inputPIN){
        if(inputPIN === this.#PIN){
            console.log("verified Successfully");
            this.AccountDetails();
        } else {
            console.log("INVALID PIN !!");
        }

    }
    AccountDetails(){
        console.log("Name:", this.name);
        console.log("Account Number:", this.accountnumber);
        // console.log("PIN:", this.#PIN); 
        console.log("Balance:", this.balance);
        console.log("***************************************");
    }
    
}

let c1 = new BankAccount("Priya", 50000, 6942);

// c1.AccountDetails();
// c1.deposit(5000);
// c1.withdraw(90000);


let inputPIN=6942;
c1.pinVerification(inputPIN)
console.log(this.PIN);
