// write your code here
const input = require('sync-input');
const console = require("node:console");

console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
console.log("Hello friend! Thank you for visiting the carnival!");
console.log("Here's the list of gifts:");
console.log();

function Gift(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;

    this.getDescription = function () {
        return this.id + "- " + this.name + ", Cost: " + this.price + " tickets";
    };
}

let teddyBear = new Gift(1, "Teddy Bear", 10);
let bigRedBall = new Gift(2, "Big Red Ball", 5);
let hugeBear = new Gift(3, "Huge Bear", 50);
let candy = new Gift(4, "Candy", 8);
let stuffedTiger = new Gift(5, "Stuffed Tiger", 15);
let stuffedDragon = new Gift(6, "Stuffed Dragon", 30);
let skateboard = new Gift(7, "Skateboard", 100);
let toyCar = new Gift(8, "Toy Car", 25);
let basketball = new Gift(9, "Basketball", 20);
let scaryMask = new Gift(10, "Scary Mask", 75);

const giftsList = [teddyBear, bigRedBall, hugeBear, candy, stuffedTiger, stuffedDragon, skateboard, toyCar, basketball, scaryMask];

giftsList.forEach(function (giftObj) {
    console.log(giftObj.getDescription());
});


//The initial number of tickets
let visitor_tickets = 0;

function isNumeric(val) {
    return /^\d+$/.test(val);
}

function isWithinRange(number, min, max) {
    return number >= min && number <= max;
}


// Get input from user


// Function to handle user choices
function handleUserChoice(choice) {
    switch (choice) {
        case '1': {
            // Buy a gift
            //If the giftList is empty, output Wow! There are no gifts to buy
            if (giftsList.length === 0) {
                console.log("Wow! There are no gifts to buy.");
                break;
            }
            //Get input from user
            const giftNum = input("Enter the number of the gift you want to get:");
            //If giftNum contains non-numeric characters, output Please enter a valid number!
            if (!isNumeric(giftNum)) {
                console.log("Please enter a valid number!");
                break;
            }
            //Search for gift with id of 1 and return its name
            const selectedGift = giftsList.find(gift => gift.id === parseInt(giftNum));
            if (selectedGift) {

                let giftPrice = parseInt(selectedGift.price);
                if (visitor_tickets < giftPrice) {
                    console.log("You don't have enough tickets to buy this gift.");
                    console.log(`Total tickets: ${visitor_tickets}`);
                    break;
                }
                console.log(`Here you go, one ${selectedGift.name}!`);
                //Also get the number of tickets
                visitor_tickets = visitor_tickets - giftPrice;
                console.log(`Total tickets: ${visitor_tickets}`);
                //Remove this gift from the list of gifts
                giftsList.splice(giftsList.indexOf(selectedGift), 1);
            } else {
                console.log("There is no gift with that number!");
            }
            break;
        }
        case '2': {
            // Add tickets
            const ticketAmt = input("Enter the ticket amount:");
            if (!isNumeric(ticketAmt) || !isWithinRange(parseInt(ticketAmt), 0, 1000)) {
                console.log("Please enter a valid number between 0 and 1000.");
                break;
            }
            visitor_tickets += parseInt(ticketAmt);
            console.log(`Total tickets: ${visitor_tickets}`);
            break;
        }
        case '3':
            // Check tickets
            console.log(`Total tickets: ${visitor_tickets}`);
            break;
        case '4':
            // Show gifts
            console.log("Here's the list of gifts:");
            console.log();
            if (giftsList.length === 0) {
                console.log("Wow! There are no gifts to buy.");
                break;
            }
            giftsList.forEach(function (giftObj) {
                console.log(giftObj.getDescription());
            });
            console.log();
            break;
        case '5':
            doExit = true;
            console.log("Have a nice day!");
            break;
        default:
            console.log("Please enter a valid number!");
            break;
    }

}

let doExit = false;
// Prompt the user for their choice
do {
    // What do you want to do?
//     1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts
    console.log();
    console.log("What do you want to do?");
    console.log("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop");
    let userChoice = input("");
    handleUserChoice(userChoice);
} while (!doExit);