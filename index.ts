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
    } else if (modelType === "image") {
        baseNumber = 5
        rateNumber = .02
    } else if (modelType === "code") {
        baseNumber = 3
        rateNumber = .05
    }

    return Math.round(baseNumber + rateNumber * promptLength)
}

//VALUE UNIONS (just like enums in c#)

export type Priority = "low" | "medium" | "high" | "critical";

export function setPriority(level: Priority) {
    switch (level) {
        case "low":
            return 0
        case "medium":
            return 1
        case "high":
            return 2
        case "critical":
            return 3
        default:
            return 0
    }
}

//SUPER SET UNIONS 
export type EmploymentStatus = "employed" | "unemployed" | "student" | string;   

updateEmploymentStatus("anything passed here will still work");

export function updateEmploymentStatus(status: EmploymentStatus){
    return `Employment status updated: ${status}`;
}

//TEMPLATE LITERAL TYPES
export type LogLevel = "info" | "warn" | "error";
export type LogSourceType = "api" | "database" | "file";

export type LogMessage = `${LogLevel}: ${string}`;
export type LogSource = `${LogSourceType}_${number}`

export function createLogEntry(message: LogMessage, source: LogSource){
    return `[${source} LOG -  ${message}]`;
}

//ARRAYS
export function averageScore(ratings:number[]){
    
    if(ratings.length === 0) return 0;

    return ratings.reduce((rating, sum) => {
        return rating + sum
    }, 0) / ratings.length;
}

//HETEROGENEOUS ARRAYS
export function interpolateComment(
    id: number,
    comment: string,
    comments: (string | number)[],
) {
    const index = comments.findIndex(c => c === id);

    if(index === -1) return
    comments[index]  = comment
}

//REST PARAMETERS
export function formatLabels(...labels: string[]){
    if(labels.length === 0) return "No Labels";

    if(labels.length === 1) return `Label: ${labels[0]   }`

    return `Labels: ${labels.join(", ")}`;
}

//EVOLVING ANY
// export function collectSupportData(id: number, resolved: boolean){
//     const supportData = [];
//     supportData.push("Support session started")
//     supportData.push(id)    
//     supportData.push(resolved)

//     return supportData;
// }


//OBJECT LITERAL TYPES

export type Mail = {
    from: string;
    to: string[];
    subject: string;
    body: string;
    urgent: boolean;
}

export function processMail(mail : Mail){
    return `FROM : ${mail.from}
    TO: ${mail.to}
    SUBJECT:${mail.urgent ? "[URGENT]" : ""}${mail.subject}
    BODY: $ ${mail.body}`;
}

//OPTIONAL OBJECT PROPERTIES
export type MailNow = {
    from: string;
    to: string[];
    subject: string;
    body: string;
    urgent: boolean;
    cc?: string[]; //cc is optional
};

export function theProcessMail(mail: MailNow){
    return `FROM: ${mail.from}
    TO: ${mail.to}${!mail.cc ? "" : "\nCC: " + mail.cc}
    SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
    BODY: ${mail.body}`;
}


//DISCRIMINATED UNIONS
type InternalAddress = {
    kind: "internal",
    firstName: string
    lastName: string
}
type ExternalAddress = {
    kind: "external",
    username: string
    domain: string
}


//SETS
export function findNumUniqueLabels(formattedAddresses: string[]) {
    const set = new Set(formattedAddresses)
    return set.size; //returns the length
}

//creating a set in javascript   //set automatically removes duplicate values 
// const set = new Set([1, 2, 3, 3])


// const theSet = new Set<string>()
// theSet.add("sdf")

//MAPS
export function getFileLength(files: Map<string, string>, filename: string){
    const file  = files.get(filename)
    if(file == null) return 0
    return new TextEncoder().encode(file).length
}

//in objects the key must be a string 


//maps , key can be anything
const map = new Map<string, number>()

//default values for maps 
//const map = new Map([[1, 2], [3, 4]])

map.set("sdfds", 235)

//DYNAMIC KEYS
export type MailPreferences = {
    [key: string]: boolean
};

const a: MailPreferences = {
    ssdsd: false
}

//same thing with the one above
export type MailPreferences2 = Record<string, boolean>; //record is just an object