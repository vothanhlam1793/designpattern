class AccountService {
    getAccount(email){
        console.log("Getting the account of " + email);
    }
}

class PaymentService {
    paymentByPaypal() {
        console.log("Payment by Paypal");
    }
 
    paymentByCreditCard() {
        console.log("Payment by Credit Card");
    }
 
    paymentByEbankingAccount() {
        console.log("Payment by E-banking account");
    }
 
    paymentByCash() {
        console.log("Payment by cash");
    }
}

class ShippingService {
 
    freeShipping() {
        console.log("Free Shipping");
    }
 
    standardShipping() {
        console.log("Standard Shipping");
    }
 
    expressShipping() {
        console.log("Express Shipping");
    }
}

class EmailService {
 
    sendMail(mailTo) {
        console.log("Sending an email to " + mailTo);
    }
}

class SmsService {
 
    sendSMS(mobilePhone) {
        console.log("Sending an mesage to " + mobilePhone);
    }
}

var _INSTANCE = 0;
var INSTANCE = 1;
class ShopFacade {
    constructor(){
        this.accountService = new AccountService();
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
        this.emailService = new EmailService();
        this.smsService = new SmsService();
        if(_INSTANCE == 0){
            _INSTANCE += 1;
            INSTANCE = new ShopFacade();
        }
    }
    getInstance(){
        return INSTANCE;
    }
    buyProductByCashWithFreeShipping(email){
        this.accountService.getAccount(email);
        this.paymentService.paymentByCash();
        this.shippingService.freeShipping();
        this.emailService.sendMail(email);
        console.log("Done\n");
    }
    buyProductByPaypalWithStandardShipping(email, mobilePhone) {
        this.accountService.getAccount(email);
        this.paymentService.paymentByPaypal();
        this.shippingService.standardShipping();
        this.emailService.sendMail(email);
        this.smsService.sendSMS(mobilePhone);
        console.log("Done\n");
    }
}

a = new ShopFacade();
// console.log(INSTANCE);
a.getInstance().buyProductByCashWithFreeShipping("contact@gpcoder.com");
a.getInstance().buyProductByPaypalWithStandardShipping("gpcodervn@gmail.com", "0988.999.999");