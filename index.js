var numberDice=Math.floor(Math.random()*6)+1;
var randomImage="dice" + numberDice + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage);
var numberDice2=Math.floor(Math.random()*6)+1;
var randomImage2="dice" +numberDice2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
if(numberDice>numberDice2)
{
  document.querySelector("h1").innerHTML="PLAY 1 WINS";
}
else if(numberDice2>numberDice)
{
  document.querySelector("h1").innerHTML="PLAY 2 WINS";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
function show()
{
  var date=new Date();
  var h=date.getHours();
  var m=date.getMinutes();
  var s=date.getSeconds();
  var session="AM";
  if(h>=12)
  {
    session="PM";
    h=h-12;
  }
  if(h<10)
  {
    h="0"+h;
  }
  if(m<10)
  {
    m="0"+m;
  }
  if(s<10)
  {
    s="0"+s;
  }
//  h=(h<10)?"0"+ h: h;
//m=(m<10)?"0"+ m :m;
//s=(s<10)?"0"+s :s;

  var time=h+":"+m+":"+s+":"+" "+session;
  document.getElementById("clock").textContent=time;
  //setTimeout(show,1000);
}
show();
setInterval(show,1000);
