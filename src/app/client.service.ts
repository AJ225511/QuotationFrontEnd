import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from './client';
import { Observable } from 'rxjs';
 
@Injectable({
	providedIn:'root'
})

export class ClientService {
 
  private baseURL: string = '//localhost:8080//quotationsystem/lookup/client';
  private id:string;
 
 
  constructor(private http: HttpClient) {}
  
  save(client: Client):Observable<Client>{
	let username='admin';
    let password='admin';
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.http.post<Client>(this.baseURL + '/new', client, {headers});
  }
	  
 
  public getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseURL);
  }
 
  //public save(client: Client) {
  //  return this.http.post<Client>(this.clientsUrl, client);
  //}
}