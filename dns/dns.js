const dns = require('dns');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is domain name?: ', (domain) => {
    rl.close();
    console.log("Domain name: " + domain);
    dns.lookup(domain, (err, address) => {
        if (err) {
            return console.log('error: ' + address);   
        }
        console.log('IP Address: ' + address);
    })
})