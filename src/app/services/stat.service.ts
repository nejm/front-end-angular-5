import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Stat } from '../models/stat';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


const API_URL = environment.apiUrl;

@Injectable()
export class StatService {

  constructor( private http:Http) { }

  public getAllStats(){
    return this.http.get(API_URL+"/rest/statistique")
            .map(res => {
                    return res.json().map(item => {
                        return new Stat(item);
                    });
              }).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('StatService::handleError', error);
    return Observable.throw(error);
  }

}
