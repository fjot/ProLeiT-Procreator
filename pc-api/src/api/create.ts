import { exec } from 'child_process';

export default async function createProject() {
  exec('ng new demo-app --style=scss --enableIvy=true --prefix=pc --routing=true', {
    cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects'
  }
  , (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
  });
}
