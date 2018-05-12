const fs = require('fs');
const readline = require('readline');
const http = require('http');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Url: ', (url) => {
    rl.question('Output: ', (savedTo) => {
        rl.close();
        http.get(url, (response) => {
            let outputData = '';
            response.on('data', (data) => {
                outputData += data;
            })
            response.on('end', () => {
                fs.writeFile(savedTo, outputData, (outputErr) =>{
                    if (outputErr) { return console.log(outputErr)}
                    return console.log('saving '+ url + 'was successful');
                })
            })
        })
    })
});