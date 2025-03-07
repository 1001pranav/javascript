/*
    DEPENDENCY INVERSION PRINCIPLE
    High level modules should not depend on low level modules. Both should depend on abstractions.
*/

class UserValidation {}
class Authentication {}
class PaymentProcessor {}
class PaymentUpdater {}


//INVALID
class PaymentService {
    constructor() {
        this.auth = Authentication;
        this.userValidation = UserValidation;
        this.paymentProcessor = PaymentProcessor;
        this.paymentUpdater = PaymentUpdater;
    }
    processPayment(amount, receiver, paymentId) {
        this.auth.authenticate();
        this.userValidation.validateUser();
        this.paymentProcessor.process(amount, receiver);
        this.paymentUpdater.update(paymentId, "Completed");
    }
}

// VALID
class PaymentService {
    constructor(auth, userValidation, paymentProcessor, paymentUpdater) {
        this.auth = auth;
        this.userValidation = userValidation;
        this.paymentProcessor = paymentProcessor;
        this.paymentUpdater = paymentUpdater;
    }
    processPayment(amount, receiver, paymentId) {
        this.auth.authenticate();
        this.userValidation.validateUser();
        this.paymentProcessor.process(amount, receiver);
        this.paymentUpdater.update(paymentId, "Completed");
    }
}