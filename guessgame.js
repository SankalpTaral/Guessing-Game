// guessing game
const max=prompt("Enter The Maximum Number");
// console.log(max);

const random=Math.floor(Math.random()*max)+1;
console.log(random);

let guess=prompt("Guess The Number");


while(true){
    if(guess=="quit"){
        console.log("Quitting Game");
        break;
    }
     if(guess==random){
        console.log("Congrats You Won");
        break;
    }

    else if(guess<random){
    guess=prompt(" your value is small  !Please Try Again");
    }
    else{
        guess=prompt("your value is to big,!Please Try Again");
    }    

}