const DiscordRPC = require('discord-rpc');
const { ipcRenderer  } = require('electron');
const {clientId} = require('./config.json');

if(clientId == "" ){
    alert('there was not a clientID in config.json. Please put your clientID in the config.json')
    ipcRenderer.invoke('quit-app');
    
    
} else {





DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });


async function setActivity() {
  if (!rpc) {
    return;
  }

rpc.setActivity({
    details: `Working on the RPC <3 `,
    state: 'if you need to talk to me dm me ',

    largeImageKey: 'snek_large',
    largeImageText: 'tea is delicious',
    smallImageKey: 'snek_small',
    smallImageText: 'i am my own pillows',
    instance: false,
  });
}

rpc.on('ready', () => {
  setActivity();

  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);


}