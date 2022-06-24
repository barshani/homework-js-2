var age = prompt("whats your age", "your age");
if(age>18){
    console.log("you may enter");
    var meat = prompt("do you eat meat", "yes or no");
    if(meat=="yes"){
        var hungry = prompt("are you hungry", "yes or no");
        if(hungry=="yes"){
            console.log("you order shnitzel and rice");
        }
        else{
            console.log("you order shnitzel");
        }
    }
    else{
        console.log("you order salad");
    }
}
else{
    console.log("you are not old enough sorry");
}