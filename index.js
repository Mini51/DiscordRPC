//importing modules
const { Console } = require('console');
const DiscordRPC = require('discord-rpc');
const fs = require('fs');
const prompt = require('prompt-sync')();
var activity = require('./defaultRPC.json')
require('./style.js')();


// Check if the config exsits if it does not it will start the setup
if (fs.existsSync('./config.json')) {
 

//Starting timer 
const startTimestamp = Date.now()

//Ask the user how many buttons they want on there RPC
console.log('Select the amount of buttons you want \n A - no buttons \n B - 1 button \n C - 2 buttons \n\x1b[33mNOTE: you can press enter to load the RPC from defaultRPC.json \x1b[0m'); 
var  RPCtype = prompt(' ').toLowerCase();

//Get the client ID from the config
const { clientId } = require('./config.json');


// Check what option the user chose 
switch(RPCtype){

    case "a": 
        console.log("you selected 0 button");
        var details = prompt('Input The detail field(Must be more then 2 chars): ');
        var state = prompt('what do you want the state to be(Must be more then 2 chars): ');
        var largeImage = prompt('Input the large Image key: ');
        var largeImageText = prompt('Input large Image text: ');

        if( details === ""|| state === ""){
          console.logDanger('[ERROR]You did not give info for one of the required fields');
          process.exit();
        } else { 
         activity = {
          details: details ,
          state: state ,
          startTimestamp,
          largeImageKey: largeImage,
          largeImageText: largeImageText,
          instance: false,
        }
       } 
        break; 
    case "b":
        console.log("you selected 1 button");
        var details = prompt('Input The detail field(Must be more then 2 chars): ');
        var state = prompt('What do you want the state to be(Must be more then 2 chars): ');
        var largeImage = prompt('Input the large Image key: ') ;
        var largeImageText = prompt('Input large Image text: ');
        var buttonName = prompt('What do you want the button name to be(Must be more then 2 chars): ');
        var buttonURL = prompt('What do you want the button to link to(Must be a valid URL): ');

        if(details === ""|| state === ""|| buttonName === "" || buttonURL === ""){
          console.logDanger('[ERROR]You did not give info for one of the required fields');
          process.exit();
        } else {
          activity = {
            buttons: [{ label: buttonName, url: buttonURL}],
            details: details ,
            state: state ,
            largeImageKey:  largeImage ,
            largeImageText: largeImageText ,
            instance: false,
          } 
        } 
        break;
    case "c":
        console.log("you selected 2 buttons");

        var details = prompt('Input The detail field(Must be more then 2 chars): ');
        var state = prompt('What do you want the state to be(Must be more then 2 chars): ')
        var largeImage = prompt('Input the large Image key: ')
        var largeImageText = prompt('Input large Image text: ')
        var buttonName = prompt('What do you want the first buttons name to be(Must be more then 2 chars): ') 
        var buttonURL = prompt('What do you want the first buttons to link to(Must be a valid URL): ')
        var buttonTwoName = prompt('What do you want the second buttons name to be(Must be more then 2 chars): ') 
        var buttonTwoURL = prompt('What do you want the second buttons to link to(Must be a valid URL): ')

          if(state === "" || buttonName === "" || buttonURL === ""|| buttonTwoName === "" || buttonTwoURL === ""){ 
            console.logDanger('You did not give info for one of the required fields ');
            process.exit();
          } else { 

          activity = {
            buttons: [{ label: buttonName, url: buttonURL}, { label: buttonTwoName, url: buttonTwoURL}],
            details: details ,
            state: state ,
            largeImageKey: largeImage,
            largeImageText: largeImageText,
            instance: false,
          }
        } 

        break;
    default: 
        console.logWarn('Loading RPC from defaultRPC.json')
        break;
}

// Register with the clientId 
DiscordRPC.register(clientId);

//Define the rpc client 
const rpc = new DiscordRPC.Client({ transport: 'ipc' });


async function setActivity() {
    if (!rpc) {
      return;
    }
  
    rpc.setActivity(activity);
  }
  
  rpc.on('ready', () => {
    setActivity();
    console.logPass('Activity has been set successfully.')
    setInterval(() => {
      setActivity();
    }, 15e3);
  });
  
rpc.login({ clientId }).catch(console.error);
} else { 
  console.logWarn("Since this is the first time using this tool, we have a bit of setup to do.")
  var cliendID = prompt(' Please input your clientID:')


    if(cliendID === ""){
        console.logWarn('[ERROR] You did not input your clientID')
        return
    }
    // What needs to be written
    let Data = { 
        clientId: cliendID
    }

    //Converting so that the data can be sent
    let formatedData = JSON.stringify(Data);

    fs.writeFile('config.json', formatedData, () =>{
      console.logPass('Config file has been created, Please rerun this app to use the RPC maker.')
    })
}