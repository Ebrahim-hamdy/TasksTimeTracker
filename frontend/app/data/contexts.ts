import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Http, RequestOptions, RequestOptionsArgs, Response, Request, Headers, XHRBackend } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';


@Injectable()
export class Context extends HttpClient {

    constructor(
        backend: HttpHandler,
        private _httpClient: HttpClient
    ) {
        super(backend)
    }

    checkRequest(request) {
        return request
            .do((res: Response) => {
                this.onSuccess(res);
            }, (error: any) => {
                this.onError(error);
            })
            .finally(() => {
                this.onEnd();
            });
    }

    get(url: string) {
        let request = super.get(url).catch(this.onCatch);
        return this.checkRequest(request);
    }

    post(url: string, model) {
        let request = super.post(url, model).catch(this.onCatch);
        return this.checkRequest(request);
    }

    put(url: string, model) {
        let request = super.put(url, model).catch(this.onCatch);
        return this.checkRequest(request);
    }

    delete(url: string) {
        let request = super.delete(url).catch(this.onCatch);
        return this.checkRequest(request);
    }

    private onCatch(error: any, caught: Observable<any>): Observable<any> {
        return Observable.throw(error);
    }

    private onSuccess(res: Response): void {
        console.log('Request successful');
    }

    private onError(res: Response): void {
        console.log('Error, status code: ' + res.status);
    }

    private onEnd(): void {
        //this.hideLoader();
    }

    private showLoader(): void {
        //this.loaderService.show();
    }

    private hideLoader(): void {
        //this.loaderService.hide();
    }
}
