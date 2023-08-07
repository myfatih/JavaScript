const Person = {
  firstName: "Karina",
  lastName: "Rin",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  weight: 50,
  height: 160,
  weightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100;
  },
  needDiet: function () {
    const weightIdeal = this.weightIdeal();
    if (weightIdeal - 5 > this.weight)
      return (
        "you need more protein, need more " + (weightIdeal - this.weight) + "kg"
      );
    else if (this.weightIdeal + 5 < this.weight)
      return (
        "You need a mayo diet, need reduce weight: " +
        (this.weight - weightIdeal) +
        "kg"
      );
    return "you are in a good shape";
  },
};

console.log(Person.fullName());
console.log(Person.weightIdeal());
console.log(Person.needDiet());

// const countries = {
//     ID: {
//         province: ['One punch man'],
//         city: ['kota A', 'kota B', 'kota Z', 'kota S'],
//     },
//     MY: {},
//     TH: {
//         province: [],
//     },
// };

// console.log(countries?.TH?.province ?? "Not Found");
