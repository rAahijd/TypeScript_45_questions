// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
export default function q13() {
    console.log("\n");
    // Define an array of modes of transportation
    let modesOfTransportations = ["Bus", "Car", "Bike", "Train"];
    // Print each mode with a statement using a for loop
    for (let i = 0; i < modesOfTransportations.length; i++) {
        console.log("I would like to own a " + modesOfTransportations[i] + ".");
    }
    console.log("\n");
    // Print each mode with a statement using forEach method
    modesOfTransportations.forEach(function (modeOfTransportation) {
        console.log("I would like to own a " + modeOfTransportation + ".");
    });
}
q13();
