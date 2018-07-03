function dwarfRollCall(dwarves) {
<<<<<<< HEAD
  var returnStr = [];
  for (var i = 0 ; i < dwarves.length; i ++){
    returnStr.push( `${i +1}. ${dwarves[i]} ` )
=======
  var returnStr = ""; 
  for (var i = 0 ; i > dwarves.length; i ++){
    returnStr.push( ` ${i +1}'.' + ${dwarves[i]} ` )
>>>>>>> 04b7d121c69f668b952288c0ae467e01e82b9a67
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
<<<<<<< HEAD
  	if ( foods[i] === "cheddar"||foods[i] ==="gouda" ||foods[i] ==="camedbert"){
  		return foods[i]
  	} 
  }
  		return "no cheese!"
  
}
=======
  	if ( foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camedbert"){
  		return foods[i]
  	} else {
  		return "no cheese!"
  	}
   
  }
}
>>>>>>> 04b7d121c69f668b952288c0ae467e01e82b9a67
