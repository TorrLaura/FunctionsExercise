// Function Exercise

function spookyGhost(){
    console.log(`Boo!!!`);
}
spookyGhost();

function candy(goal){
    console.log(goal);
    console.log(goal);
    console.log(goal);
    console.log(goal);
}
candy(`Get Candy`);

function werewolf(a,b){
    if(a === `Full` && b === `Moon`)
    console.log(`ARH-WOOO!`);
}
werewolf(`Full`, `Moon`);

function halloween(){
   return `October 31st`;
}

function isEnoughCandy(pieces){
    if(pieces >= 31){
        return true;
    }   else if(pieces <31){
        return false;
    }
}
isEnoughCandy(31);

function candyCounter(nums){
    let total = 0;
    for (i = 0; i < nums.length; i++){
        total += nums[i];
    }
    return total;
}
candyCounter(1,2,3);

const hauntedMansion= function(){
    console.log("Welcome, foolish mortals, to the Haunted Mansion");
}
hauntedMansion();

ghostbusters = ()=> `Who You Gonna Call?`;


// No
// Yes


const costumes = ["Ghost", "Princess", "Pirate"];

const upperCostumes = costumes.map (i => i.toUpperCase());

// BONUS-Completed in class

const stephenKingMovies = [
    "The Shining", 
    "Christine", 
    "It", 
    "The Mist", 
    "Creepshow", 
    "Pet Sematary"
];

const twoMovies = stephenKingMovies.filter (i => i.length ==9);
console.log(twoMovies);

const halloweenSongs1 = ["Monster Mash", "Thriller"];

const halloweenSongs2 = [
    "I Put A Spell On You", 
    "This Is Halloween",
    "Ghostbusters"
];

halloweenJukeBox = (songs) => {
    const random = Math.floor (Math.random() * songs.length);
    console.log(songs[random]);

}

console.log(halloweenSongs1);
console.log(halloweenSongs2);
