const fs = require('fs');
const prompt = require('prompt-sync')();

//Defining console colors 
const Color = {
  Reset: "\x1b[0m",
  
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
}



console.log("Hello")

const path = "./config.json";

if (fs.existsSync(path)) {
    console.log(Color.FgYellow ,'The config is already setup. If your trying to change the cliendID you will have to manually change it', Color.Reset)
} else {
    console.log('The config does not exist. Starting setup');
    var cliendID = prompt('Please input your clientID: ')


    if(cliendID === ""){
        console.log(Color.FgRed, '[ERROR] You did not input your clientID', Color.Reset)
        return
    }
    // What needs to be written
    let Data = { 
        clientId: cliendID
    }

    //Converting so that the data can be sent
    let formatedData = JSON.stringify(Data);

    fs.writeFile('config.json', formatedData, () =>{

    })
}