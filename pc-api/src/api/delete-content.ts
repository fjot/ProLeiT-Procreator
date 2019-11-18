import { exec } from 'child_process';

export default async function deleteContent() {
    exec('gulp deleteHTML', {
      cwd: '/Users/hrzwksfot01-proleit-ag-francisco_ortuzar/Sites/github/procreator/pc-api/src/task'
    }
    , (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
    });
}
