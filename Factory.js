// Đối tượng gốc
class Bank {
    constructor(){

    }
    getBankName = ()=>{
        return "";
    }
    getBankAge = ()=>{
        return "";
    }
}

// Mở rộng định danh
var bankType = {
    VCB: "VCB",
    ACB: "ACB"
};

// Ngân hàng mở rộng theo tiêu chuẩn
class VCB extends Bank {
    getBankName = () => {
        return "VCB";
    }
    getBankAge = () => {
        return "45"
    }
}

// Ngân hàng mở rộng theo tiêu chuẩn
class ACB extends Bank {
    getBankName = () => {
        return "ACB";
    }
    getBankAge = () => {
        return "18"
    }
}

// Cấu tạo ra một nhà máy
class BankFactory {
    constructor(){

    }
    getBank = (bankType) => {
        switch(bankType){
            case "VCB":{
                return new VCB();
            }
            case "ACB": {
                return new ACB();
            }
        }
    }
}

// Tạo nhà máy mới và tạo ra nhiều ngân hàng;
var b = new BankFactory();
console.log((b).getBank(bankType.ACB).getBankAge());
console.log(b.getBank(bankType.VCB).getBankName())