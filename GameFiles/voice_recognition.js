console.log("i'm in the annyang file")

function listen() {

  let commands = {
    'listen': function() { console.log('I heard you say listen.') },
    'reset': function() { console.log('I heard you say reset.') },
    'hello': function() { console.log('I heard you say hello.') },
    'goodbye': function() { console.log('I heard you say goodbye.') },
    'beyonce': function() { console.log('I heard you say Beyonce.') },
    'start game': function() {startGame();},
    'end game': function() {gameOver();}
  };

  annyang.addCommands(commands);

  annyang.start({ autoRestart: false, continuous: true, paused: false });


  annyang.addCallback('result', function(phrases) {
    console.log("bout to checkForMatch!")

    console.log(`These are the original phrases: ${phrases}`)


    let sanitizedPhrases = phrases.map( element => {if (element[0] == " ") {return element.substring(1)} else {return element}})


    console.log(`These are the sanitized phrases: ${sanitizedPhrases}`)


    checkForMatch(sanitizedPhrases);


  });

}
