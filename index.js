/ In case if you forget how to use semantic release, use this url:
// https://www.youtube.com/watch?v=mah8PV6ugNY
// In summary: 
// 1. Do the command "npm install semantic-release @semantic-release/git @semantic-release/github -D"
// 2. You can optionally create a release.config.js file for configuration options, but must create a github workflow (.github/workflows/release.yml) with stuff inside (I just copy and paste from this directory)
// 3. Enable read and write permissions, either through the GitHub website or through code in the release.yml file (see youtube video)
// 4. Done!

// Make sure the "on" (from release.yml) is on'ing the correct name of the branch you are using
// Also, make sure you at least add a name property to package.json, your package.json could literally only have that name tag and the bot will still //pass it, but I recommend to be descriptive with your package.json (to be descriptive, you can just copy and paste from directory again)
// Also also, make sure you type in "npm install" to update package-lock.json in case if you get an error about package-lock.json missing the //"@semantic-release/changelog": "^6.0.3", from devDependencies, which is used for changelogs
// Also x3, you will need to create an npm token using this website: https://www.npmjs.com/settings/wizardbacon13/tokens, make in Github it is //exactly named as "NPM_TOKEN" and automatic in the npm website. The name of the token can be whatever in the npm website, but in Github, it //must be "NPM_TOKEN


const thisIsAFunction = "this is a test var!";

console.log(thisIsAFunction);