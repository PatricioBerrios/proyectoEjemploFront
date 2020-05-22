import { Person } from '../domains/Person.model';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

export class ServiceInfoPeople {

  getInfoPeopleService(person: Person, http: HttpClient): Observable<any>{
    
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return http.post<any>(`${environment.endpoints.urlPoemService}`, person, { headers: headers });

  }

  }


