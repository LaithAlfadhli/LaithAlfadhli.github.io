
let progButton1 = document.getElementById("progButton1");//manastorm
let progButton2 = document.getElementById("progButton2");//worldstats
let progButton3 = document.getElementById("progButton3");//tradeab
let progButton4 = document.getElementById("progButton4");//Uni Project- Physics 3D Racer
let progButton5 = document.getElementById("progButton5");//the golden dive




function ClickHandle(a){
    let vidManastorm = document.getElementById("iframe");//manastorm
    let vidWorldStats = document.getElementById("WorldStats");//worldstats
    let vidTradeAB = document.getElementById("TradeAB");//tradeab
    let vidRacing = document.getElementById("Racing");//Uni Project- Physics 3D Racer
    let vidDive = document.getElementById("Dive");//the golden dive

    if(a == 5) //if golden dive is clicked
    {
        //change name, blurb and video to those related to the game
        document.getElementById("projectName").innerHTML = "The Golden Dive";
        document.getElementById("projectBlurb").innerHTML = "Tressure awaits for those brave enough to find it among the hordes of dangerous fish and mines. <a href='projects/GoldenDive.html'> Read More</a>";
        console.log("Hello world!");
        document.getElementById("iframe").src = "videos\\The Golden Dive.mp4";
    }
    else if (a ==4)//if Physics 3D Racer is clicked
    {
        document.getElementById("projectName").innerHTML = "Physics 3D Racer";
        document.getElementById("projectBlurb").innerHTML = "It's simple, they said, it's easy. Just get from point A to B the fastest you can. Nothing can go wrong. <a href='projects/Racing.html'> Read More</a> ";
        document.getElementById("iframe").src = "videos\\Racing.mp4";
  

    }
    else if (a ==3)//if TradeAB is clicked
    {
        document.getElementById("projectName").innerHTML = "TradeAB";
        document.getElementById("projectBlurb").innerHTML = "A website marketplace tutorial, place items on sale and bid your way to obtain them. Alternatively, outright buy them from other users. <a href='projects/TradeAB.html'> Read More</a> ";
        document.getElementById("iframe").src = "videos\\TradeAB.mp4";

    }
    else if (a ==2)//if WorldStats is clicked
    {
        document.getElementById("projectName").innerHTML = "WorldStats";
        document.getElementById("projectBlurb").innerHTML = "WorldStats is a quiz game that aims to teach its players about statistics and different parts of the world if they are inclined to explore. <a href='projects/WorldStats.html'> Read More</a>";
        document.getElementById("iframe").src = "videos\\WorldStats.mp4";
    }
    else // in all other cases show the details for manastorm
    {
        document.getElementById("projectName").innerHTML = "Manastorm";
        document.getElementById("projectBlurb").innerHTML = "A multiplayer first-person spellcaster in which players work in teams to obliterate their enemies. <a href='projects/Manastorm.html'>Read More </a>";
        document.getElementById("iframe").src = "videos\\Manastorm.mp4";


    }
}

progButton1.onclick = function(){ClickHandle(1)};
progButton2.onclick = function(){ClickHandle(2)};
progButton3.onclick = function(){ClickHandle(3)};
progButton4.onclick = function(){ClickHandle(4)};
progButton5.onclick = function(){ClickHandle(5)};
