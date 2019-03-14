// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    if(currency == 0) {
        return {};
    }
    
    var obj={};

    var remain=0;
    if(currency>=50) {
        while(currency % 50 != 0) {
            currency--;
            remain++;
        }
        obj['H']=currency/50;
        currency=remain;
    }

    if(currency < 50 && currency >= 25) {
        remain=0;
        while(currency % 25 != 0) {
            currency--;
            remain++;
        }
        obj['Q']=currency/25;
        currency=remain;
    }

    if(currency < 25 && currency >= 10) {
        remain=0;
        while(currency % 10 != 0) {
            currency--;
            remain++;
        }
        obj['D']=currency/10;
        currency=remain;
    }

    if(currency < 10 && currency >= 5) {
        remain=0;
        while (currency % 5 != 0) {
            currency--;
            remain++;
        }
        obj['N']=currency/5;
        currency=remain;
    }
    
    if(currency < 5) {
        if(currency > 0) obj['P']=currency;
    }

    return obj;
}
