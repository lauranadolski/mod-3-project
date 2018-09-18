function removeAll() {
   skyBox.remove()
   roadBox.remove()
   roadRectangleBox.remove()
   willLoseBlock.remove()
 }
 function loadPlayers() {
   const url = 'http://localhost:3000/api/v1/users'
   fetch(url).then(res=> res.json()).then(json => json.forEach(user => playerLists.push(user))).then(iHateYouAsynchronous => {
     playerLists = playerLists.filter(onlyUnique);
     playerLists.forEach(user=> maxFivePoints.push(user.points))
     maxFivePoints.sort((a,b) => a > b).slice(0,5)
     // debugger
     for (let i = 0; i < playerLists.length; i ++) {
       for (let j = 0; j < maxFivePoints.length; j++) {
         if (playerLists[i].points === maxFivePoints[j]) {
           maxFivePlayers.push(playerLists[i])
         }
       }
     }
     maxFivePlayers = maxFivePlayers.filter(onlyUnique)
     let playersHTML = maxFivePlayers.map(user =>
     `<div class="row">
         <div class="name">${user.name} : ${user.points} </div>
         </div>
         <br>`).join('')
       gameWindow.innerHTML = playersHTML
   })
 }
 function onlyUnique(value, index, self) {
     return self.indexOf(value) === index;
 }

  function updateScore(score) {
  let bodyJSON = {name: "Chang", points: score}
  fetch(`http://localhost:3000/api/v1/users/2`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSON),
      }).then(res => res.json())
        // our backend responds with the updated note instance represented as JSON
    };

    function createUser(name) {
      let bodyJSON = {name: name, points: 0}
      fetch(`http://localhost:3000/api/v1/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bodyJSON),
      }).then(res => res.json())
     // our backend responds with the updated note instance represented as JSON
     }
function endGame(ascore) {
 removeAll()
 clearInterval(interval)
 gameWindow.style.background = 'white'
 updateScore(ascore)
 loadPlayers()

}

function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
}
