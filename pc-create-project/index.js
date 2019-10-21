const { exec } = require('child_process');

module.exports = async function (context, req) {
  console.log('That process ist running, wait a moment!')   
  exec('ng new app --style=scss', {
    cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects'
  }
  ,(error, stdout, stderr) => {
    if(stdout) {
      console.log(stdout)
      return 
    }
    if(stderr) {
      console.log(stderr)
      return
    }
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  }); 
  if (req.query.name || (req.body && req.body.name)) {
      context.res = {
          status: 200, /* Defaults to 200 */
          body: "Hello " + (req.query.name || req.body.name)
      };
  }
  else {
      context.res = {
          status: 400,
          body: "Please pass a name on the query string or in the request body"
      };
  }
};