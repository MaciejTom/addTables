export class Person {
    constructor() {

       
        this.person = this.createPerson();
      
    }
    createPerson() {
       
        const person = document.createElement('div')
        person.contentEditable = "true";
         
        person.classList.add("person");
        
        return person;
    }

}