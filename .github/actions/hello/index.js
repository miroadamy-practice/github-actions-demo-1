const core = require('@actions/core');
const githb = require('@actions/github');

// lets simulate an error => on GH action, it will seem to be successful
try {
    // throw( new Error('Some simulated error'));

    const name = core.getInput('whom-to-greet');
    console.log(`Hello, ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    console.log.log(JSON.stringify(github, null, '\t'));
} catch (error) {
    core.setFailed('I failed');
}