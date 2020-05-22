
export class InfoPerson {

  public name: string;
  public surName: string;
  public age: string;
  public messageCongrats: string;
  public birthday: boolean

  constructor( name?: string, secondName?: string, surName?: string, age?: string,
    messageCongrats?: string, birthday?: boolean) {
    this.name = name;
    this.surName = surName;
    this.age = age;
    this.messageCongrats = messageCongrats;
    this.birthday = birthday;

  }

}
