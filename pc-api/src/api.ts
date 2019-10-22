import app from './app';
import createProject from './api/create';
import buildProject from './api/build';
import createComponent from './api/create-component';
import deleteContent from './task/delete-content';

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
                console.log('done!');
            });
        });
        app.get('/build', (req, res) => {
            buildProject().then(() => {
                console.log('done!');
            });
        });
        app.get('/create-component', (req, res) => {
            createComponent().then(() => {
                console.log('done!');
            });
        });
        app.get('/delete-content', (req, res) => {
            deleteContent().then(() => {
                console.log('done!');
            });
        });


    }

}

export default new Api();
