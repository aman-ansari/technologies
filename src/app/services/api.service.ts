import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL: string = environment.APIEndpoint;

  constructor(
    private http: HttpClient,
  ) { }

  sendMessage(data): Observable<any> {
    return this.http.post(`${this.API_URL}lead`, data);
  }

  jobApplyNow(data): Observable<any> {
    return this.http.post(`${this.API_URL}upload`, data);
  }

  getAllMembers(): Observable<any> {
    return this.http.get('./assets/json/members.json');
  }

}
