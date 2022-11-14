const superHeroes: string[] = [];
const heroPower: Array<number> = [];

type NewUser =  {
    name: string,
    isActive: boolean,
}

const allUsers: NewUser[] = [];

superHeroes.push('Spiderman');
heroPower.push(2);
allUsers.push({name: 'John', isActive: false});

console.log(superHeroes);
console.log(heroPower);
console.log(allUsers);

const customArray: number[][] = [[]]