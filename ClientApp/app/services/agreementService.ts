import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { AgreementModel } from '../models/agreement/agreementModel';
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AgreementService {
    private _headers: Headers;

    constructor(private http: Http, @Inject('BASE_URL') private baseUrl: string) {
        this._headers = new Headers();
        this._headers.append('Content-Type', 'application/json');
    }

    public Add(model: AgreementModel) {
        return this.http.post(this.baseUrl + 'api/Agreement/Add', JSON.stringify(model), { headers: this._headers });
    }

    public Update(model: AgreementModel) {
        return this.http.put(this.baseUrl + 'api/Agreement/Update', JSON.stringify(model), { headers: this._headers });
    }

    public Delete(id: any) {
        return this.http.delete(this.baseUrl + 'api/Agreement/Delete?id=' + id, { headers: this._headers });
    }

    public DeleteAll() {
        return this.http.delete(this.baseUrl + 'api/Agreement/DeleteAll', { headers: this._headers });
    }

    public GetList() {
        return this.http.get(this.baseUrl + 'api/Agreement/List', { headers: this._headers });
    }
}
