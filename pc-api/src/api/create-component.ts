import { exec } from 'child_process';

export default async function createComponent() {
    exec('ng g c components/home', {
      cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/demo-app'
    }, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });
}
