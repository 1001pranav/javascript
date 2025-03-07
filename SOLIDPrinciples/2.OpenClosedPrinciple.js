/*
        OPEN/CLOSED PRINCIPLE
    Class should be open for extension and closed for modification.

    If we consider the previous class example on "SINGLE RESPONSIBILITY PRINCIPLE" then we can say that it is not open for extension because we have to change the class to make it work for new payment processor.
*/

class PaymentService {
    processPayment(amount, receiver, paymentId) {
        // process payment
        console.log(`Processing Payment for ${paymentId} of amount ${amount} to ${receiver}`);
    }
}

class UPI extends PaymentService {
    processPayment(amount, receiver, paymentId) {
        // process UPI payment
        console.log(`Processing UPI Payment for ${paymentId} of amount ${amount} to ${receiver}`);
    }
}

class Cards extends PaymentService {
    processPayment(amount, receiver, paymentId) {
        // process Cards payment
        console.log(`Processing Cards Payment for ${paymentId} of amount ${amount} to ${receiver}`);
    }
}


class ProcessPayments {
    constructor(PaymentService) { 
        this.PaymentService = PaymentService;
    }
    sendAmount(amount) {
        this.processPayment.process(amount);
    }
}

const payment1 = new PaymentProcessor(new CreditCardPayment());
payment1.processPayment(100);

const payment2 = new PaymentProcessor(new PayPalPayment());
payment2.processPayment(200);