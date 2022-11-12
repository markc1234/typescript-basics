function addTwo(num: number): number {
    return num + 2
}

function getUpper(str: string): string {
    return str.toUpperCase()
}

function signUpUser(name: string, email: string, passsord: string | number) {

}

function loginUser(name: string, email : string, password: string | number) {
    
}

const sayHello = (s: string):string => `Hello ${s}`;

const heroes = ['Spiderman', 'Hulk'];

heroes.map((hero): string => {
    return `Hero is ${hero}`
});

// NO RETORNA NADA
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// NUNCA RETORNAN NADA
function handleError(errmsg: string): never {
    throw new Error(errmsg)
}

let num1 = addTwo(10);
console.log(num1);
let str1 = getUpper('happy');
console.log(str1);

signUpUser('marcos', '123@email.com', '12345678');