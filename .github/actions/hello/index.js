const core = require('@actions/core');
const github = require('@actions/github');

// lets simulate an error => on GH action, it will seem to be successful
try {
    // throw( new Error('Some simulated error'));

    core.debug('Debug message');
    core.warning('Warning message');

    core.error('Error Message - it will NOT cause the fail');


    const name = core.getInput('whom-to-greet');

    core.setSecret(name);   // this will cause the name not being displayed
    console.log(`Hello, ${name}`);

    const time = new Date();
    core.setOutput("time", time.toTimeString());

    core.startGroup('Logging Github object');
    console.log(JSON.stringify(github, null, '\t'));
    core.endGroup();

    // we can set variable to be used later
    core.exportVariable('HELLO', 'Hola!');
    
} catch (error) {
    core.setFailed(error.message);
}