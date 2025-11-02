abstract class Animal {
  // Abstract method (must be implemented by derived classes)
  abstract makeSound(): void;

  // Regular method (can be inherited directly)
  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

const dog = new Dog();
dog.makeSound(); // Output: Bark!
dog.move();      // Output: Moving...

// const a = new Animal(); ❌ Error: Cannot create an instance of an abstract class
