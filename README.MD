  [![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
  [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label=Support)](https://discord.gg/fkg9pbP42V)

<h1 align="center"> Custom discord RPC (CLI)</h1>


<h3 align="center"> This app is a simple and lightweight custom Discord RPC maker that is CLI-based.
<p> May be broken</p>

<br>


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
<h3>To change your preset open defaultRPC.json in a text editor</h3>

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
<hr>
<center>Made with ❤️ by mini#5130