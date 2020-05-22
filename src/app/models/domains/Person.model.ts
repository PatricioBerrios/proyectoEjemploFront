
export class Person {

  public firstName : string;
  public secondName: string;
  public firstSurname: string;
  public secondSurname: string;
  public birthdayDate: string;

  constructor( firstName?: string, secondName?: string, firstSurname?: string, secondSurname?: string,
    birthdayDate?: string) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.firstSurname = firstSurname;
    this.secondSurname = secondSurname;
    this.birthdayDate = birthdayDate;
  }

}
