const inventors = [
  {
    first: "Albert",
    last: "Einstein",
    year: 1897,
    passed: 1955,
  },
  {
    first: "Kira",
    last: "Te",
    year: 1515,
    passed: 1600,
  },
  {
    first: "Lee",
    last: "Sakura",
    year: 1549,
    passed: 1620,
  },
  {
    first: "Lui",
    last: "Yo",
    year: 1710,
    passed: 1801,
  },
  {
    first: "Kreto",
    last: "Hanaka",
    year: 1507,
    passed: 1560,
  },
  {
    first: "Max",
    last: "Planck",
    year: 1858,
    passed: 1947,
  },
  {
    first: "Marrie",
    last: "Currie",
    year: 1867,
    passed: 1934,
  },
];

const people = [
  "Beck, Glenn",
  "Kira, Sukap",
  "Glock, Samuel",
  "Begin, Machem",
  "Snoop, Dogg",
  "Wiz, Mix",
  "Justin, Bieber",
  "Anmol, KC",
  "Silpa, khadka",
];

// Array.protoype.filter()
// 1. Filter out the lists of inventors who were born in the 1500's

const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names

const names = inventors.map((name) => {
  return `${name.first} ${name.last}`;
});

console.log(names);

// Array.prototype.sort()
// 3. sort the inventors by birthdate , oldest to youngest

const Sorting = inventors.sort((a, b) => {
  if (a.year > b.year) {
    return 1;
  } else {
    return -1;
  }
});
// You can also use Conditional operator also as (a.year > b.year) ? 1 : -1;
console.table(Sorting);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

// 5. Sort the inventors by years lived.

const Oldest = inventors.sort((a, b) => {
  return a.passed - a.year > b.passed - b.year ? 1 : -1;
});
console.table(Oldest);

// 6. Sort the people alphabetically by the last name

const LastName = people.sort((LastOne, NextOne) => {
  const [aLast, aFirst] = LastOne.split(", ");
  const [bLast, bFirst] = NextOne.split(", ");
  return aLast > bLast ? 1 : -1;
});
console.log(LastName);

// Reduce Excersie
// 7. Sum up the instances of each of these
const datas = [
  "car",
  "car",
  "bike",
  "bike",
  "boat",
  "bike",
  "car",
  "walk",
  "van",
  "plane",
  "van",
];

const transportation = datas.reduce((obj, item) => {
  //   console.log(item);
  if (!obj[item]) {
    obj[item] = 0;
  }
  //   console.log(obj[item]);
  obj[item]++;
  return obj;
}, {});

console.log(transportation);
