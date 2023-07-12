// 11.10.2. Raid a Shuttle

function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

//Part 1

let fuelTest = function(check) {
  let testValue;
  if (check > 100000) {
    testValue = check - 99999;
    fuelLevel = 100001;
  } else if (check > 50000) {
    testValue = check -49999;
    fuelLevel = 50001;
  } else {
    testValue = check;
    fuelLevel = 0;
  }
  return testValue;
}
console.log(fuelTest(1000000))

//Part 2

let cargoCheck = function(n) {   
  let secondHold = []  
  if (n.includes('gold')) {
    secondHold.push(n.splice(n.indexOf('gold'), 1, 'water')[0]);
  }
  if (n.includes('satellite')) {
    secondHold.push(n.splice(n.indexOf('satellite'), 1, 'water')[0]);
  }

  return secondHold
}
console.log(cargoCheck(cargoHold))

let loadTest = function(check) {
  loadValue = [];
  loadValue.push(check.pop());
  check.push('sack of grain');
  loadValue.push(check.splice(4,1,'deck of cards'));
  return loadValue;
}
console.log(loadTest(cargoHold))

let innocentVariable = function(b){
    let items = ['dilithium','gold','AE-35 unit','Legos','TI-89 calculator', 'space suits', 'diamond tipped tools'];
    let arr2 = [];
    let i = 0;
    while (i < b.length) {
      if (items.includes(b[i])) {
        arr2.push(b[i]);
        b.splice(i,1,'pointless garbage');
      }
      i++;

 

      if (arr2.length >= 2) break;
    }
    return arr2;
};
console.log(innocentVariable(cargoHold))

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));
