let score: number | string = 33;

// combinado
const data: string[] | number[] = [1, 2, 3];
// igual a any
const data2: (string | number | boolean)[] = ["1", 2, true];

// posibles valores
let seatAllotment: 'aisle' | 'middle' | 'window';
seatAllotment = 'aisle';

type unionUser = {
    id: number,
    name: string,
}

type Admin = {
    id: number,
    username: string,
}

let me: unionUser | Admin = {username: 'Marcos', id: 1};

function getBdId(id: number | string) {
    console.log(`DB id is: ${id}`);

    if(typeof id === 'string') {
        id.toUpperCase();
    } else if(typeof id === 'number') {
        id += 2
    }
}

getBdId('password')
getBdId(4);
