In TypeScript, a Decorator is a special type of declaration that can be applied to classes, methods, accessors, properties, or parameters to modify their behavior. Decorators allow you to attach metadata or alter the functionality of the class or its members in a declarative way. They are a form of meta-programming.

Decorators are heavily used in frameworks like Angular to add functionality or extend behavior without modifying the original codebase.

How Decorators Work in TypeScript
Decorators are functions that are applied to the class or class members at design time. They are often used to add logging, validation, or other cross-cutting concerns without affecting the core logic.

To use decorators in TypeScript, you must enable the "experimentalDecorators": true compiler option in your tsconfig.json.

json
Copy code
{
  "compilerOptions": {
    "experimentalDecorators": true
  }
}
Types of Decorators
Class Decorator: Applied to a class and can modify its constructor or add metadata to the class.
Method Decorator: Applied to methods to modify or enhance their functionality.
Accessor Decorator: Applied to a getter or setter of a class property.
Property Decorator: Applied to class properties.
Parameter Decorator: Applied to method parameters.
1. Class Decorator
A class decorator is a function that takes the target class as an argument and can modify or extend the class.

typescript
Copy code
function Component(config: { selector: string }) {
  return function (target: any) {
    // Add metadata to the class
    target.prototype.selector = config.selector;
    console.log(`Component selector: ${config.selector}`);
  };
}

// Applying the decorator to a class
@Component({ selector: 'app-root' })
class AppComponent {
  constructor() {
    console.log('AppComponent initialized');
  }
}

const app = new AppComponent();
console.log(app.selector); // Outputs: 'app-root'
2. Method Decorator
A method decorator is applied to a method and can intercept or modify its behavior. It takes three arguments:

target: The prototype of the class.
propertyKey: The name of the method.
descriptor: The property descriptor of the method.
typescript
Copy code
function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} called with args:`, args);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @Log
  add(a: number, b: number) {
    return a + b;
  }
}

const calculator = new Calculator();
console.log(calculator.add(5, 3)); // Logs method call and result
In this example, the Log decorator adds logging to the add method.

3. Accessor Decorator
An accessor decorator can be used to modify the behavior of a getter or setter of a property.

typescript
Copy code
function AccessorLog(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalGetter = descriptor.get;

  descriptor.get = function () {
    console.log(`Getter for ${propertyKey} called`);
    return originalGetter?.apply(this);
  };
}

class Person {
  private _name: string = "John";

  @AccessorLog
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

const person = new Person();
console.log(person.name); // Logs when the getter is called
4. Property Decorator
A property decorator can be used to observe or manipulate properties when they are defined but does not receive the property value or its descriptor.

typescript
Copy code
function ReadOnly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false,
    configurable: false
  });
}

class Book {
  @ReadOnly
  title: string = "The Great Gatsby";

  constructor() {}
}

const book = new Book();
book.title = "New Title"; // Throws error because title is read-only
5. Parameter Decorator
A parameter decorator is used to add metadata to method parameters. It takes three arguments:

target: The prototype of the class.
propertyKey: The name of the method.
parameterIndex: The index of the parameter in the method's parameter list.
typescript
Copy code
function ParamLog(target: any, propertyKey: string, parameterIndex: number) {
  console.log(`Parameter decorator applied to ${propertyKey} at index ${parameterIndex}`);
}

class Greeter {
  greet(@ParamLog name: string) {
    console.log(`Hello, ${name}!`);
  }
}

const greeter = new Greeter();
greeter.greet("Alice"); // Logs parameter metadata
Summary of Usage:
Class Decorator: Applied to classes for adding metadata or modifying the constructor.
Method Decorator: Applied to methods for adding functionality (e.g., logging, access control).
Accessor Decorator: Applied to getters and setters to add or intercept behavior.
Property Decorator: Applied to class properties to modify their behavior.
Parameter Decorator: Applied to method parameters to add metadata or validate input.
Decorators provide a powerful way to enhance and modify classes and methods in a declarative manner, making them very useful in modern frameworks like Angular.
