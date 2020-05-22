import { Person } from '../domains/Person.model';
import { InfoPerson } from '../domains/InfoPerson.model';

export class InfoPeopleUtil {

  validateRQ(person: Person): boolean{
    
    console.log(person);
    if(person.firstName == null || person.firstName.trim() == ""){
      return false;
    }
  
    if(person.firstSurname == null || person.firstSurname.trim() == ""){
      return false;
    }

    if(person.birthdayDate == null){
      return false;
    }
    
    return true;
    
  }

  processData(person: InfoPerson): void{

    person.age = person.age + " años";
    if(!person.birthday){
      person.messageCongrats = "Faltan " + person.messageCongrats + " dias para tu cumpleaños";
    }

  }

}


