

function greetings() {
    console.log("Hello World");
}

const greetingsInAVariable = function () {
    console.log("Hello world ina Variable")
}

const greetingsInAVariable2 = () => {
    console.log("Hello world in a arrow function")
}



function doingSomething(anyFunctionRefrence, name) {
    anyFunctionRefrence(name);
}

const running = name => console.log(`${name} is running`);

doingSomething(running, "Alex")

const drinking = name => console.log(`${name} is drinking`);

const anyThingElse = name => console.log(`${name} is doing something else`);

const drinking = name => console.log(`${name} is drinking`);

doingSomething(drinking, "Alex") 
console.log("And ")
doingSomething(anyThingElse, "Alex")