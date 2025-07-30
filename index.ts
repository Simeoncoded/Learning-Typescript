//TYPES

//declaring strings
//const bootupMessage : string = "Starting support";

//booleans
//const bootupMessage : boolean = true;

//booleans
//const bootupMessage = true;

//declaring number //just like declaring int in c#
const supportAiPort: number = 3000;

//any
export const systemPrompt: any =
    "Your purpose is to help";

export const tokenLimit: any = 1000;
export const hasAdminAccess: any = true;

console.log(supportAiPort);


//FUNCTIONS

export function calculateTotal(
    price: number,
    quantity: number,
    discount: number,
): number {
    return price * quantity * (1 - discount);
}

//inferred return types

//not delaclaring the return type 
export function combinePrompts(systemPrompt: string, userPrompt: string) {
    return `${systemPrompt}\n${userPrompt}`;
}


//void 
export function logSystemEvent(event: string,
    severity: "info" | " warning" | "error"
): void {
    console.log(`SYSTEM ${severity.toUpperCase()}: ${event}`);
}

//function types
//The syntax for a function type looks lke this 

//(param1: type1, param2: type2, ...) => returnType

//for example, a function that takes two numbers and returns a number
//(a: number, b: number) => number

//Type Alias                  //name  //type     //return type
export type SupportResponse = (name: string) => string

export function greetCustomer(name: string) {
    return `Hello, ${name}, welcome to support ai! How can i assist you`;
}

export function farewellCustomer(name: string) {
    return `Goodbye ${name}, have a great day`;
}

//UNION 

//id can be string, number or a boolean
export function getTicketInfo(id: string | number | boolean) {

    //checking if id is a string
    if (typeof id === "string") {
        const parsedId = id.split("-")[1]
        const numberId = parseInt(parsedId)
        return `Processing ticket: ${numberId}`;
    }
    return `Processing ticket: ${id}`;
}

//OPTIONAL PARAMETERS
function greet(name: string, title?: string): string {
    if (title) {
        return `Hello, ${title} ${name}!`;
    }
    return `Hello, ${name}!`;
}


var num = -7.689;

var ab = Math.abs(num);

var roundAb = ab.toFixed(2);

roundAb.toString();

//OPTIONAL PARAMETERS 
export function calculateApiCost(numReqs: number, tier?: string) {
    if (tier === "pro") {
        return numReqs * .05
    }

    if (tier === "enterprise") {
        return numReqs * .03;
    }

    return numReqs * .1;
}

//DEFAULT PARAMETERS
function newCharacter(name: string, role: string = "warrior"): string {
    return `${name} is a ${role}`;
}

console.log(newCharacter("Gandalf"));
//Gandalf is a warrior...(takes default value, when no value is specified)

console.log(newCharacter("Gandalf", "wizard"));
//Gandalf is a wizard

export function estimateResponseTime(promptLength: number = 100, modelType: string = "text") {

    let baseNumber = 0 
    let rateNumber = 0

    if (modelType === "text") {
        baseNumber = 2
       rateNumber = .01
    }else if(modelType === "image"){
        baseNumber = 5
        rateNumber = .02
    }else if(modelType === "code") {
        baseNumber = 3
        rateNumber = .05
    }

    return Math.round(baseNumber + rateNumber * promptLength)
}