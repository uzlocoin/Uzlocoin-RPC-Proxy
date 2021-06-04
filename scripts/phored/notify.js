const config = require('./config.js'),
    eventNames = require('./eventNames.js'),
    redis = require('redis');

if (process.argv.length < 4) {
    console.log('No enough parameters');
    process.exit(1);
}

if (process.argv[2] !== eventNames.redis.blocknotify &&
    process.argv[2] !== eventNames.redis.mempoolnotify) {
    console.log('Unsupported option used');
    process.exit(1);
}

let client = redis.createClient(config.redis_port, config.redis_host);

client.on('error', function (err) {
    console.log('Something went wrong ', err);
    client.quit();
    process.exit(2);
});

client.send_command("SETNX", [process.argv[3], 1], (err, reply) => {
    if (err !== null) {
        console.log('Setxn error:', err);
        client.quit();
        process.exit(3);
    }

    if (reply === 0) {
        console.log(process.argv[3], 'already published by another node');
        process.exit(0);
    }

    client.publish(process.argv[2], process.argv[3], (err, reply) => {
        if (err !== null) {
            console.log('Set error:', err);
            client.quit();
            process.exit(3);
        }

        console.log('Successfully publish', process.argv[2], '=', process.argv[3]);
        client.quit();
        process.exit(0);
    });
});


// no redis response after 60 sec, then stop process
setTimeout(() => {
    console.log('blocknotify.js connection timeout');
    process.exit(4);
}, 1000 * 60);
