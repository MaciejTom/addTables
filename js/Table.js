import { Person } from "./Person.js";

export class Table {
    constructor() {
      
        this.isDragable = false;
        this.table = this.#createTable()

        this.table.addEventListener("dblclick", e => this.#getInTable(e))
      
        this.isHidden = true;

        this.table.addEventListener("mousedown", e => this.#mouseDown(e))
        this.table.addEventListener("mouseup", e => this.#mouseUp(e))

        this.table.addEventListener("mousemove", e => this.#mouseMove(e))

        this.insertDivX
        this.insertDivY

        this.leftPx;
        this.topPx;
        this.table.querySelector(".add_person_btn").addEventListener("click", e => this.#addPerson(e))
        
        this.innerDiv = this.table.querySelector(".inner_div");
        
    }
    #createTable() {

        const table = document.createElement('div')
        table.innerHTML = `<div class="inner_div"><button class="add_person_btn">Add person</button></div>`
        

        table.classList.add("table");
        document.body.appendChild(table);
        return table;
    }

    #addPerson() {

        const person = new Person();      
        this.innerDiv.appendChild(person.createPerson());   
          
    }

    #mouseMove(e) {
        
        let leftPx;
        let topPx;
        
        if (this.isDragable && this.isHidden) {

        leftPx = e.clientX - this.insertDivX;
        topPx = e.clientY - this.insertDivY;
            
        this.table.style.left = `${leftPx}px`;
        this.table.style.top = `${topPx}px`;

        }
        
    }   

    #getInTable() {

        if (this.isHidden) {   
            this.innerDiv.style.display = "block";
          
            
            this.leftPx = this.table.style.left;
            this.topPx = this.table.style.top;            

            this.table.style.left = `0`;
            this.table.style.top = `0`;

            this.isHidden = !this.isHidden;
            this.table.classList.add("showtable");          

        } else {
            this.innerDiv.style.display = "none";
            this.table.style.left = `${this.leftPx}`;
            this.table.style.top = `${this.topPx}`;
            this.isHidden = !this.isHidden;
            this.table.classList.remove("showtable");
        }
    }

    #mouseDown(e) {
     
        this.isDragable = !this.isDragable;
        this.insertDivX = e.offsetX;
        this.insertDivY = e.offsetY;
       
    }
    #mouseUp() {
        this.isDragable = !this.isDragable;
    }

}



