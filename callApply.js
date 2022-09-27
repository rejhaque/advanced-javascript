const normalPerson = {
     firstName: 'Rejwanul',
     lastName: 'Haque',
     salary: 15000,
     getFullName: function(){
          console.log(this.firstName, this.lastName);
     },
     chargeBill: function(amount, tips, tax){
          console.log(this);
          this.salary = this.salary - amount- tips - tax;
          return this.salary;
     }
}

const goribPerson = {
     firstName: 'Abul',
     lastName: 'kalam',
     salary: 10000
}
const richPerson = {
     firstName: 'Abul',
     lastName: 'Hannan',
     salary: 20000
}

// const goribChargeBill = normalPerson.chargeBill.bind(goribPerson);
// goribChargeBill(2000);
// console.log(goribPerson.salary);

// normalPerson.chargeBill.call(richPerson, 3000, 200, 500);
// console.log(richPerson.salary);

normalPerson.chargeBill.apply(richPerson, [3000, 200, 200]);
console.log(richPerson.salary);