//TYPES

//declaring strings
//const bootupMessage : string = "Starting support";

//booleans
//const bootupMessage : boolean = true;

//booleans
//const bootupMessage = true;

//declaring number //just like declaring int in c#
const supportAiPort : number = 3000; 

//any
export const systemPrompt : any = 
    "Your purpose is to help";

export const tokenLimit : any = 1000;
export const hasAdminAccess : any = true;

console.log(supportAiPort);


//FUNCTIONS

export function calculateTotal(
    price: number,
    quantity: number,
    discount: number,
) : number {
    return price * quantity * (1 - discount);
}

//inferred return types

//not delaclaring the return type 
export function combinePrompts(systemPrompt: string , userPrompt: string){
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
export type SupportResponse = (name : string) => string     

export function greetCustomer(name: string){
    return `Hello, ${name}, welcome to support ai! How can i assist you`;
}

export function farewellCustomer(name: string){
    return `Goodbye ${name}, have a great day!`; 
}