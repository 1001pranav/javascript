// Facade Design Pattern
// The Facade pattern provides a simple interface to a complex system. It hides the complexity of the system and provides a single interface to the client from where the client can access the system.

// Example of Facade Design Pattern
class ComputerFacade {
    constructor() {
        this.computer = new Computer();
    }

    turnOn() {
        this.computer.getElectricShock();
        this.computer.makeSound();
        this.computer.showLoadingScreen();
        this.computer.bam();
    }

    turnOff() {
        this.computer.closeEverything();
        this.computer.pullCurrent();
        this.computer.software();
        this.computer.halt();
    }
}

//This is hidden on different file 

class Computer {
    getElectricShock() {
        console.log("Ouch!");
    }

    makeSound() {
        console.log("Beep boop!");
    }

    showLoadingScreen() {
        console.log("Loading...");
    }

    bam() {
        console.log("Ready to work");
    }

    closeEverything() {
        console.log("Bype bype!");
    }

    pullCurrent() {
        console.log("Hah!");
    }

    software() {
        console.log("Wait a minute!");
    }

    halt() {
        console.log("Oof!");
    }
}


const computerFacade = new ComputerFacade();
computerFacade.turnOn();
computerFacade.turnOff();
