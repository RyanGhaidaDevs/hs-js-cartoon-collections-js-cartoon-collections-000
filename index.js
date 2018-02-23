function dwarfRollCall(dwarves) {

  for(var i = 0; i<dwarves.length;i++){

   var array1 = dwarves.map(function(x){

   i++ //why do I have to put this here?

   return i + ". " + x

 })

 var array2 = array1.join(" ")

 var array3 = array2 + " "
  }
  return array3
}

function summonCaptainPlanet(planeteerCalls){

  var array2 = planeteerCalls.map(function(x){
    return x.toUpperCase() + "!"
  })

  return array2
}


function longPlaneteerCalls(words) {
  for(var i = 0; i<words.length;i++){

    if(words[i].length>4) {
      return true
    }

    else return false

  }

}


function findTheCheese (food) {
var cheese = ["cheddar", "gouda", "camembert"]


for(var i = 0; i<cheese.length; i++){

  for(var j = 0; j<food.length; j++) {

    if (cheese[i] == food[j]){

    return cheese[i]


    }
    
    }

    return "no cheese!"
  }

}
