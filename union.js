var score = 33;
// combinado
var data = [1, 2, 3];
// igual a any
var data2 = ["1", 2, true];
// posibles valores
var seatAllotment;
seatAllotment = 'aisle';
var me = { username: 'Marcos', id: 1 };
function getBdId(id) {
    console.log("DB id is: ".concat(id));
    if (typeof id === 'string') {
        id.toUpperCase();
    }
    else if (typeof id === 'number') {
        id += 2;
    }
}
getBdId('password');
getBdId(4);
