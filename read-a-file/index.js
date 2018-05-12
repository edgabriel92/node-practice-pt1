const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is the filename:', (filename) => {        //question is the same as raw-input
    rl.close();                                             //closes the input option
    console.log('your file name is: ' + filename);
    fs.readFile(filename, 'utf8', (err, data) =>{
        if (err) {
            console.log('error: ' + err);
            console.log(filename + ' does not exist');
            return;
        }
        console.log(data.toUpperCase());
    })
    
}) 
