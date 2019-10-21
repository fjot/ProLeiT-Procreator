import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
// import { NgxIndexedDB } from 'ngx-indexed-db';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    createNew = 'https://pc-create-project.azurewebsites.net/api/pc-create-project'
    copyFiles = 'http://localhost:8080/copy';


    // db = new NgxIndexedDB('dataProject', 1);
     constructor(private http: HttpClient) {
    //     this.setDateBase();
     }

    // setDateBase() {
    //     this.db.openDatabase(1, evt => {
    //         const objectStore = evt.currentTarget.result.createObjectStore('objectHTML', { keyPath: 'id', autoIncrement: true });
    //         objectStore.createIndex('name', 'name', { unique: false });
    //         objectStore.createIndex('email', 'email', { unique: true });
    //         objectStore.createIndex('object', 'object', { unique: true });
    //     });
    // }

    // addDataB(object: any) {
    //     this.db.add('objectHTML', { name: 'Pancho', email: 'francisco@oyt.cl', object: object }).then(
    //         () => {
    //             console.log('creando un usuario');
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     );
    // }

    // getByKey() {
    //     this.db.getByKey('objectHTML', 1).then(
    //         person => {
    //             console.log(person);
    //         },
    //         error => {
    //             console.log(error);
    //         }
    //     );
    // }

    // getConfig() {
    //     return this.http.get(this.configUrl)
    //         .subscribe((res) => {
    //             console.log(res);
    //         });
    // }

    // runServer() {
    //     return this.http.get(this.configUrlRun)
    //         .subscribe((res) => {
    //             console.log(res);
    //         });
    // }

    // injectHtml() {
    //     return this.http.get(this.configTask)
    //         .subscribe((res) => {
    //             console.log(res);
    //         });
    // }


    create() {
        return this.http.get(this.createNew)
    }

    copy() {
        this.http.get(this.copyFiles)
            .subscribe((res: any) => {
                console.log(res);
            });
    }
    
    // ngOnDestroy() {
    //     this.onDestroy$.next(true);
    //     this.onDestroy$.complete();
    //   }


}

