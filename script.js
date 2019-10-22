const name = "Alicia Martin";
const age = 23;
const birthday = "September 29";
let detroitGC = true;
let counter = 0;
randomNumber = Math.floor(Math.random() * 10) + 1;

lifeEvents = [
  "I was born in Troy, Michigan",
  "I graduated from Athens High School in 2014",
  "I graduated from Michigan State University in 2018",
  "My dog was born in 2011"
];

if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

while (true) {
  if (randomNumber !== 5) {
    counter += 1;
    console.log("random number !==5");
  } else {
    counter += 1;
    console.log(
      `5===5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
