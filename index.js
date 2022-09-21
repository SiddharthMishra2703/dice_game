function play(){
    var image = document.querySelectorAll("img")[0];
    var randomNo1 = Math.floor((Math.random()*6)+1);
    var randomSrc1 = "images/dice" + randomNo1 + ".png";
    image.setAttribute("src",randomSrc1);

    var randomNo2 = Math.floor((Math.random()*6)+1);
    var randomSrc2 = "images/dice" + randomNo2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src",randomSrc2);

    document.querySelector("button").innerHTML = "PLAY AGAIN";
    if(randomNo1>randomNo2)
    {
        document.querySelector("h1").innerHTML = "🚩Player 1 Win!";
    }
    else if(randomNo1<randomNo2)
    {
        document.querySelector("h1").innerHTML = "🚩Player 2 Win!";
    }
    else if(randomNo1==randomNo2)
    {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}