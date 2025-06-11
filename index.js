const core = require('@actions/core')
const github = require('@actions/github')  
const fs = require('fs');

try {
    
    // `who-to-greet` input defined in action metadata file

    const nameToGreet = core.getInput('who-to-greet');

    console.log(`Hello ${nameToGreet}!`);

    const time = (new Date()).toTimeString();

    core.setOutput("time",time);

// Replace 'example.txt' with your file path
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:\n', data);
});


    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`the event payload: ${payload}`);

} catch (error) {
    core.setFailed(error.message);
}
