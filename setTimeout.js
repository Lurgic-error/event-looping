let cue = 'The actors are here!';

// However, the cue is not announced until at least 5000ms have
// passed through the use of setTimeout
setTimeout(function() {
    return console.log(cue);
}, 5000);

// This console log is executed right away
console.log('An exploration of art and music. And now, as we wait for the actors...')