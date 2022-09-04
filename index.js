// document.querySelectorAll("img")[0].setAttribute("src",("images/dice" + Math.floor(Math.random()*6+1) + ".png"));
// document.querySelectorAll("img")[1].setAttribute("src",("images/dice" + Math.floor(Math.random()*6+1) + ".png"));
// (randomImg==randomImg2)?document.querySelector("h1").innerHTML = "Draw" : document.querySelector("h1").innerHTML = ((randomImg>randomImg2)?"Player 1 Wins":"Player 2 Wins") ;
function clicked(){
  var c = 0;
  a = 0;
  var roll = setInterval(rollit, 50);

  function rollit(){
      document.querySelectorAll("img")[0].setAttribute("src",("images/dice" + Math.floor(Math.random()*6+1) + ".png"));
      document.querySelectorAll("img")[1].setAttribute("src",("images/dice" + Math.floor(Math.random()*6+1) + ".png"));
      a += 72;
      b = "rotateY(" + a + "deg)";
      document.querySelectorAll('.dice img')[0].style.transform = b;
      document.querySelectorAll('.dice img')[1].style.transform = b;
      c++;
      if(c==10){
        clearInterval(roll);
      }
  }
}
