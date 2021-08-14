//if else
let time=10;
let wishMessage = ' ';
if(time<=12){
    wishMessage='Good Morning';
}
else if(time>12 && time<=17){
    wishMessage='Good Afternoon';

}
else if(time>17 && time<=23){
    wishMessage='Good Evening';

}
else{
    wishMessage='enter a proper time';
}
console.log(wishMessage);

//switch statement
let day=new Date().getDay()
let today=' ';
switch (day){
    case 0:
        today='sunday';
        break;
    case 1:
        today='monday';
        break;
    case 2:
        today='tuesday';
        break;
    case 3:
        today='wednesday';
        break;
        case 4:
        today='thursday';
        break;
    case 5:
        today='friday';
        break;
    case 6:
        today='saturday';
        break;
    default:
        today='enter a proper day';
        break;

}
console.log(`today is : ${today}`);

//for loop



