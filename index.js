const DiscordRPC = require('discord-rpc');
const { clientId } = require('./config.json')
var prompt = require('prompt-sync')();
var activity = require('./defaultRPC.json')

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





//Starting timer 
const startTimestamp = Date.now()

//Ask the user how many buttons they want on there RPC
console.log('Select the amount of buttons you want \n A - no buttons \n B - 1 button \n C - 2 buttons \n\x1b[33mNOTE: you can press enter to load the RPC from defaultRPC.json \x1b[0m'); 
var  RPCtype = prompt(' ').toLowerCase();


// Check what option the user chose 
switch(RPCtype){

    case "a": 
        console.log("you selected 0 button");
        var details = prompt('Input The detail field(Must be more then 2 chars): ');
        var state = prompt('what do you want the state to be(Must be more then 2 chars): ');
        var largeImage = prompt('Input the large Image key: ');
        var largeImageText = prompt('Input large Image text: ');

        if( details === ""|| state === ""){
          console.log(Color.FgRed, '[ERROR]You did not give info for one of the required fields'), Color.Reset;
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
          console.log(Color.FgRed, '[ERROR]You did not give info for one of the required fields', Color.Reset);
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
            console.log( Color.FgRed, 'You did not give info for one of the required fields ', Color.Reset);
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
        console.log(Color.FgYellow, 'Loading RPC from defaultRPC.json', Color.Reset)
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
    console.log(Color.FgGreen, 'Activity has been set successfully.', Color.Reset)
    setInterval(() => {
      setActivity();
    }, 15e3);
  });
  
rpc.login({ clientId }).catch(console.error);