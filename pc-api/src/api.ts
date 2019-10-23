import app from './app';
import createProject from './api/create';
import buildProject from './api/build';
import createComponent from './api/create-component';
import deleteContent from './task/delete-content';
import deployProject from './api/deploy';

class Api {
    constructor() {
        this.api();
    }

    public api(): void {
        app.get('/', (req, res) => {
            res.send('Welcome to Proleit WA');
        });
        app.get('/create', (req, res) => {
            createProject().then(() => {
               setTimeout(() => {
                createComponent();
               }, 5000);
            });
        });
        app.get('/delete-content', (req, res) => {
            deleteContent().then(() => {
                console.log('done!');
            });
        });
        app.get('/build', (req, res) => {
            buildProject().then(() => {
                console.log('done!');
            });
        });

        app.get('/deploy', (req, res) => {
            deployProject() .then(() => {
                console.log('see your deployed site at https://demoappstatic.z6.web.core.windows.net/');
            });
        });




    }

}

export default new Api();
