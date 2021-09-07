// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);


function writeCards(name, event){
    const message = [];
    for (let i=0; i < name.length; i++) {
        message.push (`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return message;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}