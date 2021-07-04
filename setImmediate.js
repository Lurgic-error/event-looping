
// A timeout
setTimeout(function() {
    console.log('I am a timeout');
}, 5000);

// An interval
setInterval(function() {
    console.log('I am an interval');
}, 5000);

// An immediate, its callback will be executed before those defined above
setImmediate(function() {
    console.log('I am an immediate');
});

// IO callbacks and code in the normal event loop runs before the timers
console.log('I am a normal statement in the event loop, guess what comes next?');