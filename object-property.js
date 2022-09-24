const students = [
     {id: 21, name: 'Rejwanul'},
     {id: 312, name: 'Esha'},
     {id: 34, name: 'Sajon'},
     {id: 31, name: 'Maannaaaaa'}
];
const output = [];
for (let i = 0; i < students.length; i++) {
     const element = students[i];
     const result = element.name;
     output.push(result);
}
console.log(output);

const names = students.map(s => s.name);
const ids = students.map(s => s.id);

const bigger = students.filter(s => s.id > 30);
const biggerOne = students.find(s => s.id > 40);

console.log(ids);
console.log(names);
console.log(bigger);
console.log(biggerOne);
