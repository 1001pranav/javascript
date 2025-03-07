/*
        SINGLE RESPONSIBILITY PRINCIPLE
    This says one class should have only one responsibility.
    For example consider an payment system, A payment system might have following responsibilities.
    1. Authentication
    2. Verify Receiver details
    3. Payment Processing
    4. Update Payment.
    
    All of those should be handled in separate classes instead of one.
    consider following example
*/ 

// INVALID Method
class PaymentSystem {
    constructor(amount, receiver) {
        this.amount = amount;
        this.receiver = receiver;
    }
    authenticate() {
        // authenticate
        console.log("Authenticated");
        
    }
    verifyReceiverDetails() {
        // verify receiver details
        console.log('Verified Receiver Details');
    }
    processPayment() {
        // process payment
        console.log('process payment');
        
    }
    updatePayment() {
        // update payment
        console.log('update payment');
    }
}


// SINGLE RESPONSIBILITY PRINCIPLE 
// 1. Authentication Responsibility
class Authentication {
    authenticate() {
        console.log("User Authenticated");
    }
}

// 2. User Validation Responsibility
class UserValidation {
    validateUser() {
        console.log('Verified User Details');
    }
}

// 3. Payment Processing Responsibility
class PaymentProcessor {
    process(amount, receiver) {
        console.log(`Processing payment of $${amount} to ${receiver}`);
    }
}

// 4. Payment Updating Responsibility
class PaymentUpdater {
    update(paymentId, status) {
        console.log(`Payment ${paymentId} updated to status: ${status}`);
    }
}

// 5. Coordinator (Follows SRP, Delegates Responsibilities)
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

// 6. Usage
const paymentService = new PaymentService(
    new Authentication(),
    new UserValidation(),
    new PaymentProcessor(),
    new PaymentUpdater()
);

paymentService.processPayment(100, "John Doe", "PAY1234");