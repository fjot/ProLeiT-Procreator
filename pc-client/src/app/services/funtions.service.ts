import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  } from '@angular/common/http';
// import { NgxIndexedDB } from 'ngx-indexed-db';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    API_URL = 'http://localhost:8000';
    // db = new NgxIndexedDB('dataProject', 1);

    createNew = this.API_URL + '/create';
    deployNew = this.API_URL + '/deploy';
    copyFiles = this.API_URL + '/copy';

     constructor(private http: HttpClient, private router: Router) {
     }


     create() {
        this.http.get(this.createNew)
             .subscribe((res: any) => {
                 console.log(res);
             }, (err: HttpErrorResponse) => {
                 console.log(err);
              });
     }
 
     deploy() {
       this.http.get(this.deployNew)
            .subscribe((res: any) => {
                console.log(res);
            }, (err: HttpErrorResponse) => {
                console.log(err);
             });
    }
 
     copy() {
         this.http.get(this.copyFiles)
             .subscribe((res: any) => {
                 console.log(res);
             });
     }
 
     handleError(error) {
         let errorMessage = '';
         if (error.error instanceof ErrorEvent) {
           // client-side error
           errorMessage = `Error: ${error.error.message}`;
         } else {
           // server-side error
           errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
         }
         window.alert(errorMessage);
         return throwError(errorMessage);
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

    
    // ngOnDestroy() {
    //     this.onDestroy$.next(true);
    //     this.onDestroy$.complete();
    //   }


}

