function dwarfRollCall(dwarves) {
  var returnStr = [];
  for (var i = 0 ; i < dwarves.length; i ++){
    returnStr.push( `${i +1}. ${dwarves[i]} ` )
  }
  return returnStr.join('');
}

function summonCaptainPlanet(planeteerCalls){
  var sumCalls = []; 
    for (var i = 0; i < planeteerCalls.length; i ++){
    sumCalls.push( planeteerCalls[i].toUpperCase() + "!"); 
    }
    return sumCalls;
}

function longPlaneteerCalls(words) {
  var calls = [];
  for (var i=0; i < words.length; i++){
    if (words[i].length > 4){
      return true;
    } else {
      return false;
    }
  }
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (var i = 0; i < foods.length; i++ ){
  	if ( foods[i] === "cheddar"||foods[i] ==="gouda" ||foods[i] ==="camedbert"){
  		return foods[i]
  	} 
  }
  		return "no cheese!"
  
}