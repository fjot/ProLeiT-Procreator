import { exec } from 'child_process';

export default async function deployProject() {
    exec('ng deploy', {
      cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/projects/demo-app'
    }
    , (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });
}
