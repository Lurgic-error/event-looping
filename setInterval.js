
// This function simulates us checking the length
// of a McDonald's drive-through queue
let getQueueLength = function() {
    return Math.round(12 * Math.random());
};

// We would like to retrieve the queue length at regular intervals
// this way, we can decide when to make a quick dash over
// at the optimal time
setInterval(function() {
    let queueLength = getQueueLength();

    console.log(`The queue at the McDonald's drive-through is now ${queueLength} cars long.`);

    if (queueLength === 0) {
        console.log('Quick, grab your coat!');
        clearInterval(this)
        return
    }

    if (queueLength > 8) {
        return console.log('This is beginning to look impossible!');
    }
}, 3000);