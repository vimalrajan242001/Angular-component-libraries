import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
interface users {
 data : [
   {
    first_name : string,
    id: number,
    last_name:string,
    email:string,
    avatar:string
   }
 ]
}
@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  readonly url = "https://reqres.in/api/users"
  constructor(private http:HttpClient) { }
  
  getuserdata():Observable<users>{
    return this.http.get<users>(`${this.url}`)
  }
}
