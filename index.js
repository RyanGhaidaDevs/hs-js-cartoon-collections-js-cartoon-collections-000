function dwarfRollCall(dwarves) {

  var str = ""

  for (var i = 1; i <= dwarves.length; i++) {

    str += i + ". " + dwarves[i-1] + " "

  }
  return str
}



function summonCaptainPlanet(planeteerCalls){
  return planeteerCalls.map( element => element.toUpperCase() + "!" )
}


function longPlaneteerCalls(words) {
  for(var i = 0; i<words.length;i++){
    if(words[i].length>4) {
      return true
    }
  }

  return false
}

}




function findTheCheese(food) {
  var cheeses = ["cheddar", "gouda","camembert"]

  for(var i = 0; i<cheeses.length; i++){
    
      for(var j = 0; j<food.length; j++) {

          if (cheeses[i] == food[j]){

            return cheeses[i]
            
            }        
      }
      
      return "no cheese!"
  }
  
}
