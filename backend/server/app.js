const express = require("express");
const { exec } = require('child_process');

const app = express();

app.get('/', function (req, res) {
  res.send('Welcome to Proleit WA');
});

// Function for inject HTML from gulp
app.get('/copy', function () {
  function execute() {
    exec('gulp injectHtml', {
      cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/backend/server'
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

  




