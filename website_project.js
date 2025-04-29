let faction = 3;
switch (player.faction) {
    case 1:
        console.log("Space Marines");
        break;
    case 2:
        console.log("Necron");
        break;
    case 3:
        console.log("Apeptus Custodes");
        break;
    case 4:
        console.log("Chaos Space Marines");
        break;
    default:
        console.log("Invalid Faction")
}
//This would be to choose which faction they are choosing and each faction as number attached.
// The idea being to spread out to different factions and not to many people play the same one.

let player = {
    name: "Henry Cavill",
    faction: "Adeptus Custodes",
    seed: "4th Overall",
    start: function() {
        console.log("player ready")
    } 
};
//Objects to keep track of important player information

function getTotalPrice() {
    return prices.reduce((total, price) => total + price, 0);
}
//For pricing at the shop

let age = 20

if (age > 16) {
    console.log("You cannot play in this event.");
} 
else {
    console.log("You can play in this event.");
}
// This is to make we are following are age requirement rules