// const User = {
//     name: 'Marcos',
//     email: 'marcos@mail.com',
//     isActive: true
// };

// function createUser({name: string, isPaid: boolean}) {
// }
// let newUser = {name: 'Marcos', isPaid: false, email: 'marcos@mail.com'}
// createUser(newUser);

// retorna un objeto personalizado 
// function createCourse():{name: string, price: number} {
//     return {name: 'react', price: 10}
// }

// readonly --> No se permite modificar solo agregar valores a un array
type User = {
    readonly _id: string
    name: string, 
    email: string,
    isActive: boolean,
};
type cardNumber = {
    carnumber: string,
}
type cardDate = {
    cardDate: string,
}

type CardDetails = cardNumber & cardDate & {
    cvv: number
}

function createUser(user: User): User {
    return user
}

let user: User = {
    _id: '12345678',
    name: '',
    email: '', 
    isActive: true,
}

createUser(user);