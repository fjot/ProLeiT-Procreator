const { exec } = require('child_process');

module.exports = async function (context, req) {

    console.log('That process ist running, wait a moment!')    
    exec('ng new app --style=scss', {
      cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects'
    }
    ,(error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    });
};