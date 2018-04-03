# Espruino Webpack/Babel Sample

A sample project which uses Webpack and Babel with appropriate settings for Espruino.

## Setup

Highly recommend installing [nvm](https://github.com/creationix/nvm) to enable easy installation of different Node runtimes.

Install/use node for this project:

    nvm install
    nvm use
    
Install dependencies:
    
    npm i
    
Build the project:

    npm run build

Upload to microcontroller (using WebIDE or [espruino CLI](https://www.npmjs.com/package/espruino)).
e.g. Using the command line. (Note: Your port and baud rate may vary).

    espruino -b 115200 -p /dev/cu.SLAB_USBtoUART dist/entry.bundle.js

### Disclaimer
I have not done comprehensive testing that ensures that all code is compiled or executes as expected.

If you run into any issues, please consider raising an issue here or in the [official Espriuno repository](https://github.com/espruino/Espruino).

# Thanks!
Many thanks to the Espruino team for making this possible. It's been a real pleasure to get such quick results.

# License
nvm is released under the MIT license.

## Expected output

For reference, the following output is expected:    
    
    value (inside-block): is-inside
    value (outside-block): is-outside
    {
      "a": 1,
      "b": 2,
      "c": 3,
      "d": 4,
      "e": 5,
      "f": 6
     }
    {
      "age": 34,
      "name": "Jane Doe"
     }
    wheels: 4 color: yellow
    A default parameter: default-value
    =Promise {  }
    After 2 seconds, promise results: first-promise second-promise

