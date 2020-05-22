import { Component, OnInit } from '@angular/core';
import { Person } from './models/domains/Person.model';
import { InfoPeopleUtil } from './models/utils/InfoPeopleUtil.model';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from '@angular/core';
import { ServiceInfoPeople } from './models/services/ServiceInfoPeople.model';
import { InfoPerson } from './models/domains/InfoPerson.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@Injectable()
export class AppComponent implements OnInit{

  title = 'infoPeople';
  person = new Person();
  infoPeopleUtil = new InfoPeopleUtil ();
  serviceInfoPeople = new ServiceInfoPeople();
  infoPerson = new InfoPerson();
  showResult = false;
  showSuccessfull = true;
  date = new Date();
  loading = false;
 
  ngOnInit(){
  }

  constructor(private http: HttpClient) { }
  

  getInfo(): void{
  
    console.log(this.person);
    if(this.infoPeopleUtil.validateRQ(this.person)){
      this.loading = true;
      this.serviceInfoPeople.getInfoPeopleService(this.person, this.http).toPromise().then(data=>{
        console.log(data);
        this.infoPerson = data;
        this.infoPeopleUtil.processData(this.infoPerson);
        this.loading = false;
        this.showResult = true;
        this.showSuccessfull = false;
      }, error=>{
        this.loading = false;
        alert("Ha ocurrido un error con el servicio. Intente nuevamente o contacte al administrador");
      });
    }else{
      this.loading = false;
      alert("Ingrese todos los campos obligatorios");
    }

  };

  tryAgain(): void{
    this.showResult = false;
    this.showSuccessfull = true;
    this.infoPerson = new InfoPerson();
    this.person = new Person();
  }

}


