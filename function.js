function addTwo(num) {
    return num + 2;
}
function getUpper(str) {
    return str.toUpperCase();
}
function signUpUser(name, email, passsord) {
}
function loginUser(name, email, password) {
}
var sayHello = function (s) { return "Hello ".concat(s); };
var heroes = ['Spiderman', 'Hulk'];
heroes.map(function (hero) {
    return "Hero is ".concat(hero);
});
// NO RETORNA NADA
function consoleError(errmsg) {
    console.log(errmsg);
}
// NUNCA RETORNAN NADA
function handleError(errmsg) {
    throw new Error(errmsg);
}
var num1 = addTwo(10);
console.log(num1);
var str1 = getUpper('happy');
console.log(str1);
signUpUser('marcos', '123@email.com', '12345678');
