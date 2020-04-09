/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Since we've been working on global scope, the value of "this" will be the console object.
 * 2. Implicitly, when a function is called and has a dot after the object before that dot will be "this".
 * 3. When we use a function that returns an object, "this" will refer to the specific instance of the object created and is returned by the function mentioned.
 * 4. "this" is explicitly defined when we use the .call or . apply methods because we are explicitly passing in a "this" context to the methods.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

function myDog(name) {
    console.log(this);
    return name;
}
myDog("Beans");


// Principle 2

// code example for Implicit Binding

const doggoHello = {
    greeting: 'Jumps and Licks',
    helloBack: function(human) {
        console.log(`${this.greeting} for my ${human}`);
        console.log(this);
    }
};
doggoHello.helloBack('gris');

// Principle 3

// code example for New Binding
function GrumpyCat(kitten) {
    this.greeting = 'I shall ignore you...';
    this.kitten = kitten;
    this.ignores = function() {
        console.log(this.greeting + this.kitten);
        console.log(this);
    };
}

const noodles = new GrumpyCat('Senor Noodles');
const trueno = new GrumpyCat('Thunder the kitty meow meow');

noodles.ignores();
trueno.ignores();

// Principle 4

// code example for Explicit Binding
//done with above code

noodles.ignores(trueno);
trueno.ignores.apply(noodles);