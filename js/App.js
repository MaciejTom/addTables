import { Table } from "./Table.js";


class App {
    constructor() {

        const addBtn = document.querySelector(".add_table_btn");

        addBtn.addEventListener("click", e => this.addTable(e));

        this.arrayOfTables = [];

    }
    addTable(e) {

        const table = new Table();

        this.arrayOfTables.push(table);

        this.serializeArrayOfTables(this.arrayOfTables)

    }
    serializeArrayOfTables(tables) {

        const serializedArrayOfTable = tables.map(table => {
            const container = {};

            container[table.id] = JSON.stringify(table)

            return container;


        })
        this.addTablesToLocal(serializedArrayOfTable);

    }
    addTablesToLocal(array) {
        array.forEach(table => {

            const key = Object.keys(table)[0];
            const value = table[key]

            localStorage.setItem(key, value)

            // localStorage.setItem(table.[0], table.serializedTable)
        })
    }
    displayTables() {



    }
    // displayFromLocalStorage() {
    //     for (let i = 0; i < localStorage.length; i++) {
    //         const key = localStorage.key(i);

    //         const serializedTable = localStorage.getItem(key);
    //         const deserializedTable = JSON.parse(serializedTable);
    //         console.log(deserializedTable)
    //     }
    // }
    // displayTables({table}) {
    //     const currentTable = `<div class="inner_div"><button class="add_person_btn">Add person</button></div>`
    // }

}

const app = new App()

window.onload = function () {

    if (localStorage.length) {
        for (let i = 0; i < localStorage.length; i++) {
         
            const key = localStorage.key(i)

            const value = JSON.parse(localStorage.getItem(key))
        

            // const table = `<div class="table" style="left: ${value.leftPx}px; top:  ${value.topPx}px;"><div class="inner_div"><button class="add_person_btn">Add person</button></div></div>`

            // document.body.insertAdjacentHTML("beforeend", table)
            
            const table = new Table(value.leftPx, value.topPx, value.id)
           

        }
    }
}