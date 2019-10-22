const express = require("express");
const {exec} = require('child_process');
const createProject = require('./pc-functions-create/create');
const buildProject = require('./pc-functions-create/build')
const createComponent = require('./pc-functions-create/create-component')

const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to Proleit WA');
});

app.get('/create', (req, res) => {
  createProject().then((resp) => {
      console.log(resp)
  })
})

app.get('/create-component', (req, res) => {
  createComponent().then((resp) => {
    console.log(resp)
  })
})

app.get('/build-project', (req, res) => {
  buildProject().then((resp) => {
    console.log(resp)
  })
})

// Function for inject HTML from gulp
app.get('/copy', function () {
  function execute() {
    exec('gulp injectHTML', {
      cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-api/server'
    }, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
    console.log('That process ist running, wait a moment!')
  }
  execute()
})

app.listen(8080, () => {
  console.log('Welcome to Proleit WA, Are you ready?');
});






