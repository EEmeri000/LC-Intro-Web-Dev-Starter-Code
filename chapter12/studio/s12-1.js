// 12.8.1. Select the Crew

// Code your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}
let idNumbers = [291, 414, 503, 599, 796, 890];

let chosenID = [];

while (chosenID.length < 3) {
  chosenForLaunch = selectRandomEntry(idNumbers);
  if (!chosenID.includes(chosenForLaunch)) {
    chosenID.push(chosenForLaunch);
  }
}


console.log(chosenID);



// Code your buildCrewArray function here:

function buildCrewArray(ids, candidates) {
 let cadetNames = [];
  for (i = 0; i < ids.length; i++) {
    for (j = 0; j < candidates.length; j++){
      if(candidates[j].astronautID === ids[i]) {
        cadetNames.push(candidates[j])
      }
    }
  }
  return cadetNames;
}


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

console.log(buildCrewArray(chosenID, animals))

let finalCrew = buildCrewArray(chosenID, animals)

// Code your template literal and console.log statements:
console.log(`${finalCrew[0].name}, ${finalCrew[1].name}, and ${finalCrew[2].name} are going to space!`)