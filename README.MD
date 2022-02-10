  [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
  [![Support Server](https://img.shields.io/discord/591914197219016707.svg?color=7289da&label=Support-server&logo=discord&style=flat-square)](https://discord.gg/vpEv3HJ)
 
<h1 align="center"> Custom discord RPC (CLI)</h1>


###  This is a simple and light weight custom Discord RPC maker.


## Feautres 
- option to include buttons
- sharable RPC's with JSON 
 


<h1 align="center"> Setup </h1> 

   1. Install [NodeJS](https://nodejs.org/en/)
   2. Run `NPM I`
   3. run start.bat  

   <br>
   <br>

<h1 align= "center"> Make your own preset </h1>
<h2>To change your preset open defaultRPC.json in a text editor</h2>

<br>

<h3>Example with a button</h3>

```json
{
    "buttons": [{ "label": "Example title", "url": "https://example.com"}],
    "details": "Example head" ,
    "state": "Example state",
    "largeImageKey": "Large_image",
    "largeImageText": "Example image text",
    "instance": false
} 
```

<h3>Example with 2 buttons</h3>

```json
{
    "buttons": [{ "label": "Example title", "url": "https://example.com"}, { "label": "Example title", "url": "https://example.com"}],
    "details": "Example head" ,
    "state": "Example state",
    "largeImageKey": "Large_image",
    "largeImageText": "Example image text",
    "instance": false
}
```