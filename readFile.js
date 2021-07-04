const fs = require('fs');

setTimeout(() => console.log('I am a timeout'), 2000)

setInterval(() => console.log("\nI am an intervanl"), 2000)

setImmediate(() => console.log('I am an immediate timer.'))
// Attempt to read the poem file
// Attach a callback to handle a successful read and print the contents to console
fs.readFile('./poem.txt', 'utf-8', function(err, data) {
    if (err) return console.error(err);

    let poem = data.toString();
    console.log('Here is the poem of the day...\n\n');
    return console.log(data);
});

