/*
        LISKOV SUBSTITUTION PRINCIPLE
    subclasses should be able to replace their base classes without causing errors or changing behavior.

    For example consider a class Payment and sub class CreditCardPayment. If we call CreditCardPayment then it should work same as Payment.
*/ 

class Payment {
    processPayment(amount, receiver) {
        // process payment
        console.log(`Processing payment of $${amount} to ${receiver}`);
    }
}

class CreditCardPayment extends Payment {  
    processPayment(amount, receiver) {
        // process credit card payment
        console.log(`Processing credit card payment of $${amount} to ${receiver}`);
    }
}


// This should work same as Payment
class CryptoPayments extends Payment {
    processPayment(amount, receiver) {
        // process crypto payment
        throw "Payment not implemented yet"
    }
}