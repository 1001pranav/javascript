/*
        INTERFACE SEGREGATION PRINCIPLE
    Class should not be forced to implement interfaces it does not use. 
    For example: from Liskov's substation principle we know that we need to use same functionality in sub classes.
    if Payment class has functionality called transferMoneyToAccount 
*/


class Payment {
    process(amount) {}
    refund(amount) {}
    saveCardDetails() {}
    verifyBankAccount() {}
}
class CreditCardPayment extends Payment {
    process(amount) {
        console.log(`Processing $${amount} via Credit Card`);
    }

    refund(amount) {
        console.log(`Refunding $${amount} via Credit Card`);
    }

    saveCardDetails() {
        console.log("Saving Credit Card details");
    }

    verifyBankAccount() {
        throw new Error("Credit Card does not require bank account verification!"); // ❌ Problem
    }
}

class CryptoPayment extends Payment {
    process(amount) {
        console.log(`Processing $${amount} via Crypto`);
    }

    refund(amount) {
        console.log(`Refunding $${amount} via Crypto`);
    }

    saveCardDetails() {
        throw new Error("Crypto does not use card details!"); // ❌ Problem
    }

    verifyBankAccount() {
        throw new Error("Crypto does not use bank account verification!"); // ❌ Problem
    }
}

class ProcessPayment {
    process(amount) {}
}

class RefundPayment {
    refund(amount) {}
}

class CardPayment {
    saveCardDetails() {}
}

class BankVerification {
    verifyBankAccount() {}
}

class CreditCardPayment extends ProcessPayment {
    process(amount) {
        console.log(`Processing $${amount} via Credit Card`);
    }

    saveCardDetails() {
        console.log("Saving Credit Card details");
    }
}

class CryptoPayment extends ProcessPayment {
    process(amount) {
        console.log(`Processing $${amount} via Crypto`);
    }
}

class BankTransferPayment extends ProcessPayment {
    process(amount) {
        console.log(`Processing $${amount} via Bank Transfer`);
    }

    verifyBankAccount() {
        console.log("Verifying Bank Account");
    }
}

function processAnyPayment(payment, amount) {
    payment.process(amount);
}

const creditCard = new CreditCardPayment();
processAnyPayment(creditCard, 100); 

const crypto = new CryptoPayment();
processAnyPayment(crypto, 50);

const bank = new BankTransferPayment();
bank.verifyBankAccount();
processAnyPayment(bank, 200);