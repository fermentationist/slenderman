# *slenderman*

**slenderman** is a fast and easy way to create a basic [**Svelte**](https://svelte.dev) app. With a single command, you will have a running app, that you can then take apart and reassemble as you wish.

The app is set up to use [**Webpack**](https://webpack.js.org/), with [**svelte-loader**](https://www.npmjs.com/package/svelte-loader), to compile your code. [**Webpack-dev-server**](https://www.npmjs.org/package/webpack-dev-server) will start up automatically to serve your app, and watch your files for changes (hot reloading!).

---

## Installation and usage
**slenderman** may be installed globally or locally, and then called from the command line when you wish to create a new Svelte application.

Install globally with **npm**:
```bash
npm install -g slenderman
```
Then call **slenderman** with your app's name as an argument:
```bash
slenderman exampleApp
```
Or, you may allow the use the default directory name, *svelteApp* and just type:
```bash
slenderman
```
*Alternately, you may run **slenderman** without installing it by using `npx`
```bash
npx slenderman exampleApp
```
---
## What it does

There is nothing fancy going on here; **slenderman** merely executes some bash scripts synchronously:

- `mkdir APPNAME`
This creates a new directory, with the name chosen by the user at runtime, or else, the default name *svelteApp*. If a directory with that name already exists, the program exits with an error.

- `npx degit fermentationist/slender-template`
This command uses [**degit**](https://www.npmjs.com/package/degit) to clone the  [template repository](https://github.com/fermentationist/slender-template) locally, creating the app.

- `git init`
The directory is initialized as a Git repository.

- `npm init -y`
npm is installed and a package.json manifest file is created.

- `npm install`
The app's dependencies are installed.

- `npm start`
This script will initiate a Webpack build, start up the development server, and launch http://localhost:9000 in the default browser.

Once this short script has executed, you will have a running Svelte app!




---
## Credits

**slenderman**, and [**slender-template**](https://github.com/fermentationist/slender-template) were made by [**Dennis Hodges**](https://dennis-hodges.com), a Javascript developer.

[**Svelte**](https://svelte.dev) was made by a very smart fellow named [**Rich Harris**](https://github.com/Rich-Harris). Thanks, Rich!


---
## License

#### Copyright © 2019 [**Dennis Hodges**](https://github.com/fermentationist) 


__The MIT License__

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.