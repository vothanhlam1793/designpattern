class Account {
    openAccount(){
        console.log("Ngân hàng này chưa hỗ trợ mở tài khoản");
    }
    close(){
        console.log("Ngân hàng này chưa hỗ trợ đóng tài khoản");
    }
}

class CheckingAccount extends Account {
    openAccount(){
        console.log("Checking account");
    }
}

class SavingAccount extends Account {
    openAccount(){
        console.log("Saving account");
    }
}

class Bank {
    constructor(account){
        this.account = account;
    }
    openAccount(){
        
    }
}

class VietcomBank extends Bank {
    constructor(account){
        super(account);
    }
    openAccount(){
        console.log("VietcomBank: ");
        this.account.openAccount();
    }
}
class TPBank extends Bank {
    constructor(account){
        super(account);
    }
    openAccount(){
        console.log("TPBank: ");
        this.account.openAccount();
    }
}

a = new VietcomBank(new CheckingAccount());
a.openAccount();
b = new TPBank(new SavingAccount());
b.openAccount();