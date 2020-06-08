# Johnny-Five-Experiments
 JavaScript Hardware Stuff



## Instructions




# ----- CODE MENTOR ARTICLE OUTLINE -----
## What did you build

## About me

## The problem you wanted to solve
Demonstrate JavaScript is more than a "web" language or Scripting language.

## What is XYZ
  Node
  Tessel 2
  Arduino


# ----- Process -----

## Tech stack
  ### Required Software
  * Node    -- 
  * Arduino -- 
  * [firmata](https://www.arduino.cc/en/reference/firmata) -- 

## The process of building XYZ

1. Install Prerequisite Software
  ```npm init -y``` && ```npm i johnny-five```
  # Install [Tessel 2 CLI](https://github.com/tessel/t2-cli)
  ```npm install -g t2-cli``` 


2. Connecting & Discovering the Device
  # Connect USB to Tessel & Find the device
  At this point, we're really just [following the documentation](http://tessel.github.io/t2-start/) on the official website. 

  # Rename the Device

  # Wifi 
  Note that this wont work on 5G wifi.
  `t2 wifi -n "NETGEAR47-5G"  -p "wittyteapot533"`

  Authorize with `t2 provision`, which helps create a secure connection.

  # Starting the Project 
  `t2 init` This will create an `index.js` file, `.npmrc` anf `.tesselinclude` files.

    a “package.json” with some metadata Node uses for your project
    a “.tesselinclude” file which the T2 CLI uses to optimize bundle size
    an entrypoint file called “index.js”

  # Running the code
  `t2 run index.js`

  # Disconnecting & Erase 
  `t2 push index.js` Now plug Tessel in to USB power, just like plugging in a phone or an original Tessel. Wait for it to boot up, then… lights will blink! 

  `t2 erase` will clear the saved code.

# Modules

# Tweet
(http://tessel.github.io/t2-start/tweet.html)

# Web Server
Here we will make a simple nodejs Server. We'll do a bit more than the [original docs](http://tessel.github.io/t2-start/webserver.html) though.

```js
// Import the interface to Tessel hardware
var tessel = require('tessel');
// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with "Hello from Tessel!" to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello from Tessel!\n");
});

// Listen on port 8080, IP defaults to 192.168.1.101. Also accessible through [tessel-name].local
server.listen(8080);

// Put a friendly message in the terminal
console.log("Server running at http://192.168.1.101:8080/");
```





  # Connecting the Tessel 2 & firmata



## Challenges you faced

# Ohms Law
Create functions for the following:
1. Get Volts -- I x R = E
2. Get Amps -- E / R = I
3. Get Ohms -- E / I = R
4. Get Power -- E x I = P


# ----- Conclusion -----

## Key learnings

## Tips and advice

## Final thoughts and next steps


