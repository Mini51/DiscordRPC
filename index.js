const DiscordRPC = require('discord-rpc');
const { clientId } = require('./config.json')
var prompt = require('prompt-sync')();
var activity = require('./defaultRPC.json')
const startTimestamp = new Date();

//Ask the user how many buttons they want on there RPC
console.log('Select the amount of buttons you want \n A - no buttons \n B - 1 button \n C - 2 buttons \n\x1b[33mNOTE: you can press enter to load the RPC from defaultRPC.json \x1b[0m'); 
var  RPCtype = prompt(' ').toLowerCase();


// Check what option the user chose 
switch(RPCtype){

    case "a": 
        console.log("you selected 0 button");
        var details = prompt('Input The detail field(Must be more then 2 chars)');
        console.log(details)
        var state = prompt('what do you want the state to be(Must be more then 2 chars)')
        var largeImage = ('Input the large Image key')
        var largeImageText = ('Input large Image text')

        if( details === ""||state === ""){
          console.log('\x1b[31m [ERROR]You did not give info for one of the required fields \x1b[0m');
          process.exit();
        } else { 
         activity = {
          details: details ,
          state: state ,
          largeImageKey: largeImage,
          largeImageText: largeImageText,
          instance: false,
        }
       } 
        break; 
    case "b":
        console.log("you selected 1 button");
        var details = prompt('Input The detail field(Must be more then 2 chars)');
        var state = prompt('What do you want the state to be(Must be more then 2 chars)')
        var largeImage = ('Input the large Image key')
        var largeImageText = ('Input large Image text')
        var buttonName = prompt('What do you want the button name to be(Must be more then 2 chars)') 
        var buttonURL = prompt('What do you want the button to link to(Must be a valid URL)')

        if(details === ""|| state === ""|| buttonName === "" || buttonURL === ""){
          console.log('\x1b[31m [ERROR]You did not give info for one of the required fields \x1b[0m');
          process.exit();
        } else {
          activity = {
            buttons: [{ label: buttonName, url: buttonURL}],
            details: details ,
            state: state ,
            largeImageKey: 'snek_large',
            largeImageText: 'tea is delicious',
            smallImageKey: 'snek_small',
            smallImageText: 'i am my own pillows',
            instance: false,
          } 
        } 
        break;
    case "c":
        console.log("you selected 2 buttons");

        var details = prompt('Input The detail field(Must be more then 2 chars)');
        var state = prompt('What do you want the state to be(Must be more then 2 chars)')
        var largeImage = ('Input the large Image key')
        var largeImageText = ('Input large Image text')
        var buttonName = prompt('What do you want the first buttons name to be(Must be more then 2 chars)') 
        var buttonURL = prompt('What do you want the first buttons to link to(Must be a valid URL)')
        var buttonTwoName = prompt('What do you want the second buttons name to be(Must be more then 2 chars)') 
        var buttonTwoURL = prompt('What do you want the second buttons to link to(Must be a valid URL)')

          if(state === "" || buttonName === "" || buttonURL === ""|| buttonTwoName === "" || buttonTwoURL === ""){ 
            console.log('\x1b[31m [ERROR]You did not give info for one of the required fields \x1b[0m');
            process.exit();
          } else { 

          activity = {
            buttons: [{ label: buttonName, url: buttonURL}, { label: buttonTwoName, url: buttonTwoURL}],
            details: details ,
            state: state ,
            largeImageKey: 'snek_large',
            largeImageText: 'tea is delicious',
            smallImageKey: 'snek_small',
            smallImageText: 'i am my own pillows',
            instance: false,
          }
        } 

        break;
    default: 
        console.log('\x1b[33mLoading RPC from defaultRPC.json')
        break;
}







// Register with the clientId 
DiscordRPC.register(clientId);

//Define the rpc client 
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

// Start the timer 




async function setActivity() {
    if (!rpc) {
      return;
    }
  
    rpc.setActivity(activity);
  }
  
  rpc.on('ready', () => {
    setActivity();
    console.log(`\x1b[32mActivity has been set successfully.  \x1b[0m`)

    setInterval(() => {
      setActivity();
    }, 15e3);
  });
  
rpc.login({ clientId }).catch(console.error);