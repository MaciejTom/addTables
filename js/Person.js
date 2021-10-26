import { Table } from "./Table.js";


export class Person {
    constructor() {
       
        this.person = this.createPerson();
        
      
    }
    createPerson() {
      
        const personDiv = document.createElement('div');
        const person = document.createElement("div");
        const deletePerson = document.createElement('button');
        
        person.contentEditable = "true";
        deletePerson.textContent = "Usuń osobe";

        deletePerson.classList.add("deleteBtn");
        person.classList.add("person");
      
        
        personDiv.appendChild(person);
        personDiv.appendChild(deletePerson);

        deletePerson.addEventListener("click", this.deletePerson);
         
        
        // person.addEventListener("input", this.#addContentToLocal);
        return personDiv;
    }
    deletePerson() {
        this.parentNode.remove()
    }

    
}