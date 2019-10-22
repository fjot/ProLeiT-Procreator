import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
// import { NgxIndexedDB } from 'ngx-indexed-db';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    //createNew = 'https://pc-create-project.azurewebsites.net/api/pc-create-project?code=vCPvAszP8ngLQWabXmPuKcDNPd/sByj4geP1vh7j5ZCUM6sSPHO7wg=='
    //createNew = 'http://localhost:7071/api/pc-create-project'
    createNew = 'http://localhost:8080/create';
    copyFiles = 'http://localhost:8080/copy';


    // db = new NgxIndexedDB('dataProject', 1);
     constructor(private http: HttpClient, private router: Router) {
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
       this.http.get(this.createNew)
        .subscribe((resp: any) => {
         this.router.navigateByUrl('/dashboard');
         console.log(resp);
       
       })
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

