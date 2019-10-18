const { exec } = require('child_process');

module.exports = async function (context, req) {

    console.log('That process ist running, wait a moment!')    
    exec('ng g c components/home --module=app', {
      cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app'
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