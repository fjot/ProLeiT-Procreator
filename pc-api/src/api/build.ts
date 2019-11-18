import { exec } from 'child_process';
export default async function buildProject() {
    exec('ng build --prod', {
      cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/app'
    }, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });
}
