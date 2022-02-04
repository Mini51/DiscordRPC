const DiscordRPC = require('discord-rpc');
const { clientId } = require('./config.json')
var prompt = require('prompt-sync')();
var activity = require('./defaultRPC.json')
const startTimestamp = new Date();

//Ask the user how many buttons they want on there RPC
console.log('Select the amount of buttons you want \n A - no buttons \n B - 1 button \n C - 2 buttons \n NOTE: you can press enter to load the RPC from defaulrRPC.json'); 
var  RPCtype = prompt(' ').toLowerCase();


// Check what option the user chose 
switch(RPCtype){

    case "a": 
        console.log("you selected 0 button");
        var details = prompt('Input The detail field(Must be more then 2 chars)');
        var state = prompt('what do you want the state to be(Must be more then 2 chars)')

         activity = {
          details: details ,
          state: state ,
          largeImageKey: 'snek_large',
          largeImageText: 'tea is delicious',
          smallImageKey: 'snek_small',
          smallImageText: 'i am my own pillows',
          instance: false,
        }
        break; 
    case "b":
        console.log("you selected 1 button");
        var details = prompt('Input The detail field(Must be more then 2 chars)');
        var state = prompt('what do you want the state to be(Must be more then 2 chars)')
        var buttonName = prompt('What do you want the button name to be(Must be more then 2 chars)') 
        var buttonURL = prompt('What do you want the button to link to(Must be a valid URL)')


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
        break;
    case "c":
        console.log("you selected 2 buttons");
        break;
    default: 
        console.log('Loading RPC from defaultRPC.json')
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