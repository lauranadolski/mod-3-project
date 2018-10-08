// This file manages the voice recognition functionality using the Annyang JS library.

// This function starts the Annyang library's listening functionality.
function listen() {
  let commands = {
    'start game': function() {startGame();},
    'end game': function() {gameOver();}
  };
  annyang.addCommands(commands);
  annyang.start({ autoRestart: false, continuous: true, paused: false });
  annyang.addCallback('result', function(phrases) {
    let sanitizedPhrases = phrases.map( element => {if (element[0] == " ") {return element.substring(1)} else {return element}})
    checkForMatch(sanitizedPhrases);
  });

}
