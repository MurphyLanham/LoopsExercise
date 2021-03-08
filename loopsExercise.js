for(x=1; x<=7; x++){
    console.log(x);
}
console.log("=====");

for(x=5; x<=25; x+=4){
    console.log(x);
}
console.log("=====");

const wizards = ["Harry Potter", "Hermione Granger", "Ron Weasley"]
for(n of wizards){
    console.log(n);
}
console.log("=====");

let harryPotterMovies=0
while(harryPotterMovies < 8){
    console.log(harryPotterMovies);
    harryPotterMovies++;
}