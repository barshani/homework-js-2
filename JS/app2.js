var age = prompt("whats your age", "age");
var friendAge = prompt("whats your friend age", "age");
var sum=Number(age)+Number(friendAge);
if(sum>100){
    console.log("you may enter the party");
}
else{
    console.log("sorry youre not old enough see you in a few years");
}