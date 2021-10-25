import { Person } from "./Person.js";
import { LocalInterface } from "./LocalInterface.js";

export class Table {
    constructor(leftPx, topPx, id) {
        this.leftPx = leftPx;
        this.topPx = topPx;

        id ? this.id = id
            : this.id = Date.now();

        this.isDragable = false;
        this.table = this.#createTable(this.leftPx, this.topPx);

        this.table.addEventListener("dblclick", e => this.#getInTable(e))

        this.isHidden = true;

        this.table.addEventListener("mousedown", e => this.#mouseDown(e))
        this.table.addEventListener("mouseup", e => this.#mouseUp(e))

        this.table.addEventListener("mousemove", e => this.#mouseMove(e))

        this.insertDivX
        this.insertDivY




        this.table.querySelector(".add_person_btn").addEventListener("click", e => this.#addPerson(e),)

        this.innerDiv = this.table.querySelector(".inner_div");



        // this.addTableToLocal = () => {
        //     const serializedTable = JSON.stringify(this)
        //     localStorage.setItem(this.id, serializedTable)
        // }
        // console.log(this.addTableToLocal)
        // this.#addTableToLocal()

        // addTableToLocal(this)        
    }
    // #addTableToLocal() {
    //     const serializedTable = JSON.stringify(this)
    //     localStorage.setItem(this.id, serializedTable)
    // }
    // #setTableInLocal() {
    //     const serializedTable = JSON.stringify(this)
    //     localStorage.setItem(this.id, serializedTable)
    // }

    #createTable(leftPx, topPx) {
        

        const tableString = `<div class="table" style="left: ${leftPx}px; top: ${topPx}px;"><div class="inner_div"><button class="add_person_btn">Add person</button></div></div>`
        // table.innerHTML = `<div class="inner_div"><button class="add_person_btn">Add person</button></div>`
        const table = new DOMParser().parseFromString(tableString, 'text/html').body.firstElementChild;
        // document.body.insertAdjacentHTML("beforeend", table)

        document.body.appendChild(table)


        return table;
    }

    #addPerson() {


        const person = new Person();
        this.innerDiv.appendChild(person.createPerson());

    }

    #mouseMove(e) {

        if (this.isDragable && this.isHidden) {

            this.leftPx = e.clientX - this.insertDivX;
            this.topPx = e.clientY - this.insertDivY;


            this.table.style.left = `${this.leftPx}px`;
            this.table.style.top = `${this.topPx}px`;

        }

    }

    #getInTable(e) {




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

        this.#addThisTableToLocal()
        this.isDragable = !this.isDragable;

    }
    #addThisTableToLocal() {
        
        localStorage.setItem(this.id, JSON.stringify(this));
        
    }

}



