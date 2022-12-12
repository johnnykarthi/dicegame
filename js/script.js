var random1 = Math.floor(Math.random()*6)+1;;
var random2 = Math.floor(Math.random()*6)+1;;

var randomImage1 = document.getElementById("dic").setAttribute("src","images/dice"+random1+".png");

var randomImage2 = document.getElementById("dics").setAttribute("src","images/dice"+random2+".png");

if(random1 > random2)
{
    document.querySelector(".heading").innerHTML = "Karthick wins✨💙!";
}
else if(random1 < random2){
    document.querySelector(".heading").innerHTML = "Maha wins🖤✨!";
}
else{
    document.querySelector(".heading").innerHTML = "Draw!";
}
