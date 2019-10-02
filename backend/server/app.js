var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function (req, res) {
  res.send('Welcome to Proleit WA');
});

// Function that build a new Angular project
app.get('/script', function () {
function execute() {
  const { exec } = require('child_process');
  exec('ng build --prod', {
    cwd: '/Users/fortuzar/sites/fjot/proleitTest'
  },(error, stdout, stderr) => {

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

// Function that run a new instance
app.get('/run', function () {
  function execute() {
    const { exec } = require('child_process');
    exec('http-server -o', {
      cwd: '/Users/fortuzar/sites/fjot/proleitTest/dist/proleitTest'
    }, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
  }
  execute()
})

// Function for inject HTML from gulp
app.get('/injectHtml', function () {
  function execute() {
    const { exec } = require('child_process');
    exec('gulp injectHtml', {
      cwd: '/Users/fortuzar/sites/fjot/fjot-landig/server'
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

// Function for inject HTML from server
app.get('/createHtml', function () {  
  function execute() {
    var writerStream = fs.createWriteStream('/Users/fortuzar/sites/fjot/proleitTest/src/app/app.component.html');
   // writerStream.write(data, 'UTF8');
    writerStream.write('<h1>The button should be here<h1>\n');
    writerStream.write('<button>Click hier</button>\n');
    writerStream.end();
    writerStream.on('finish', function () { console.log("Write completed."); });
    writerStream.on('error', function (err) { console.log(err.stack); });
  }
  execute()
})

app.listen(8080, function () {
  console.log('Welcome to Proleit WA, Are you ready?');
});



// function loading() {
//   var h = ['|', '/', '-', '\\'];
//   var i = 0;

//   return setInterval(() => {
//     i = (i > 3) ? 0 : i;
//     console.clear();
//     console.log(h[i]);
//     i++;
//   }, 300);
// };

// app.get('/executePwd', function() {
//   function exc() {
//     const { spawn } = require('child_process');
//     const ls = spawn('ng build', ['/Users/fortuzar/sites/fjot/proleitTest']);

//     ls.stdout.on('data', (data) => {
//       console.log(`stdout: ${data}`);  
//     });

//     ls.stderr.on('data', (data) => {
//       console.log(`stderr: ${data}`);
//     });

//     ls.on('close', (code) => {
//       console.log(`child process exited with code ${code}`);
//     });
//   }
//   exc();
// })



// const testscript = exec('sh myscript.sh /directory');
// testscript.stdout.on('data', function (data) {
//   console.log(data);
//   // sendBackInfo();
// });

// testscript.stderr.on('data', function (data) {
//   console.log(data);
//   // triggerErrorStuff();
// });

