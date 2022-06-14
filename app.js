var items = ["chicken biryani","beef biryani","chicken karahi","burger","sandwich","chicken burger","zinger burger","broast","ice cream","kheer","chicken kabab","beef kabab","cold drinks"];
var input = prompt("Enter your dish:");
var index = items.indexOf(input);
    if(index !== -1){
        console.log("The Dish You Need is number " + ++index + " on Our Menu" );      
    }
    else{
        var index1 = items.slice(0);
        console.log("Sorry The Dish You Need is Not Available in Our Menu.");
        console.log("But you also Try other Dishes");
        console.log("Like " + index1);
    }


